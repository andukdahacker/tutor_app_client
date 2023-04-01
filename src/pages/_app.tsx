import { ACCESS_TOKEN_KEY } from "@/modules/auth.constants";
import { authStore } from "@/modules/auth/data/auth.store";
import "@/styles/globals.css";
import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export const { ToastContainer, toast } = createStandaloneToast();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    async function checkAuth(token: string | null) {
      await authStore.checkIfAuthenticated(token);
    }

    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    checkAuth(token);
  }, []);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ChakraProvider>
  );
}
