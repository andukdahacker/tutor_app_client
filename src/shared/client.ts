import { RefreshAccessTokenDocument } from "@/generated/graphql";
import { ACCESS_TOKEN_KEY } from "@/modules/auth.constants";
import { authStore } from "@/modules/auth/data/auth.store";
import { createClient, fetchExchange } from "@urql/core";
import { authExchange } from "@urql/exchange-auth";
import jwtDecode, { JwtPayload } from "jwt-decode";

export const client = createClient({
  url: "http://localhost:4000/graphql",
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
  ],
});
