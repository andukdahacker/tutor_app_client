import { Client as WsClient, createClient as createWsClient } from "graphql-ws";
export let wsClient: WsClient;

if (typeof window !== "undefined") {
  wsClient = createWsClient({
    url: "ws://tutorappserver-production.up.railway.app/graphql",
  });
}
