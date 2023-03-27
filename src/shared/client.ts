import { createClient, dedupExchange, fetchExchange } from "urql";

export const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [dedupExchange, fetchExchange],
});
