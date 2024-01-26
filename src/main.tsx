import {
  ChakraProvider,
  ColorModeScript,
  createStandaloneToast,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const { ToastContainer, toast } = createStandaloneToast();

const themeConfig = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="light" />
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={themeConfig}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>,
);
