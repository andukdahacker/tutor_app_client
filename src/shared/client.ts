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
            (e) => e.extensions?.code === "UNAUTHORIZED"
          );
        },
        willAuthError: (_operation) => {
          let token = localStorage.getItem(ACCESS_TOKEN_KEY);

          if (!token) return false;
          const decodedJwt = jwtDecode<JwtPayload>(token);
          if (decodedJwt.exp) {
            var now = Date.now();
            if (decodedJwt.exp < now) {
              console.log("willAuthError");
              return true;
            }
          }
          return false;
        },
        refreshAuth: async () => {
          let token;
          const result = await utils.mutate(RefreshAccessTokenDocument, {});
          if (result.data?.refreshAccessToken) {
            token = result.data.refreshAccessToken.access_token;
            localStorage.setItem(ACCESS_TOKEN_KEY, token);
          } else {
            await authStore.logOut();
          }
        },
      };
    }),
    fetchExchange,
  ],
});
