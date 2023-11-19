import createClient from "openapi-fetch";
import { ACCESS_TOKEN_KEY } from "../../features/auth/store/constants";
import { paths } from "../../schema/schema";

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

const client = createClient<paths>({
  baseUrl: "http://localhost:4000",
  headers: {
    get Authorization() {
      const token = getAccessToken();
      return token ? `Bearer ${token}` : undefined;
    },
  },
});

export default client;
