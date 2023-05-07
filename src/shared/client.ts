import { RefreshAccessTokenDocument } from "@/generated/graphql";
import { ACCESS_TOKEN_KEY } from "@/modules/auth.constants";
import authStore from "@/modules/auth/stores/auth.store";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  AnyVariables,
  Client,
  createClient,
  fetchExchange,
  subscriptionExchange,
} from "@urql/core";
import { authExchange } from "@urql/exchange-auth";
import { GraphQLError } from "graphql";
import { Client as WsClient, createClient as createWsClient } from "graphql-ws";
import jwtDecode, { JwtPayload } from "jwt-decode";

type GqlVariables = AnyVariables | Record<string, any> | void | undefined;

export type GqlError = Error | GraphQLError[];

type GqlFetchResult<T = any> = {
  data?: T;
  errors?: GqlError;
};

interface GqlClient {
  query<T = any, V extends GqlVariables = GqlVariables>(
    query: TypedDocumentNode<T, V>,
    variables: V
  ): Promise<GqlFetchResult<T>>;
  mutation<T = any, V extends GqlVariables = GqlVariables>(
    mutation: TypedDocumentNode<T, V>,
    variables: V
  ): Promise<GqlFetchResult<T>>;
  subscription<T = any, V extends GqlVariables = GqlVariables>(
    subscription: TypedDocumentNode<T, V>,
    variables: V
  ): Promise<GqlFetchResult<T>>;
}

let wsClient: WsClient;

if (typeof window !== "undefined") {
  wsClient = createWsClient({
    url: "ws://tutorappserver-production.up.railway.app/graphql",
  });
}

const urqlClient = createClient({
  url: "https://tutorappserver-production.up.railway.app/graphql",
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [
    authExchange(async (utils) => {
      return {
        addAuthToOperation: (operation) => {
          let token = localStorage.getItem(ACCESS_TOKEN_KEY);
          if (!token) return operation;
          return utils.appendHeaders(operation, {
            Authorization: `Bearer ${token}`,
          });
        },
        didAuthError: (error, _operation) => {
          return error.graphQLErrors.some(
            (e) =>
              e.extensions?.code === "UNAUTHORIZED" ||
              e.extensions?.code === "UNAUTHENTICATED"
          );
        },
        willAuthError: (_operation) => {
          let token = localStorage.getItem(ACCESS_TOKEN_KEY);

          if (!token) return false;
          const decodedJwt = jwtDecode<JwtPayload>(token);
          if (decodedJwt.exp) {
            if (decodedJwt.exp < Math.floor(Date.now() / 1000)) {
              return true;
            }
          }
          return false;
        },
        refreshAuth: async () => {
          let token;
          authStore.showLoading();
          const result = await utils.mutate(RefreshAccessTokenDocument, {});
          authStore.hideLoading();
          if (result.data?.refreshAccessToken) {
            token = result.data.refreshAccessToken.access_token;
            localStorage.setItem(ACCESS_TOKEN_KEY, token);
          } else {
            localStorage.removeItem(ACCESS_TOKEN_KEY);
          }
        },
      };
    }),
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: (request) => {
        const input = { ...request, query: request.query || "" };
        return {
          subscribe(sink) {
            const unsubscribe = wsClient.subscribe(input, sink);
            return { unsubscribe };
          },
        };
      },
    }),
  ],
});

class UrqlClientAdapter implements GqlClient {
  private client: Client;
  constructor() {
    this.client = urqlClient;
  }

  async query<T = any, V extends GqlVariables = GqlVariables>(
    query: TypedDocumentNode<T, V>,
    variables: V
  ): Promise<GqlFetchResult<T>> {
    const result = await this.client.query(query, variables).toPromise();
    return {
      data: result.data,
      errors: result.error?.graphQLErrors ?? result.error?.networkError,
    };
  }

  async mutation<T = any, V extends GqlVariables = GqlVariables>(
    mutation: TypedDocumentNode<T, V>,
    variables: V
  ): Promise<GqlFetchResult<T>> {
    const result = await this.client.mutation(mutation, variables).toPromise();
    return {
      data: result.data,
      errors: result.error?.graphQLErrors ?? result.error?.networkError,
    };
  }

  async subscription<T = any, V extends GqlVariables = GqlVariables>(
    subscription: TypedDocumentNode<T, V>,
    variables: V
  ): Promise<GqlFetchResult<T>> {
    const result = await this.client
      .subscription(subscription, variables)
      .toPromise();

    return {
      data: result.data,
      errors: result.error?.graphQLErrors ?? result.error?.networkError,
    };
  }
}

export const urql = new UrqlClientAdapter();
