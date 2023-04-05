import { authStore } from "@/modules/auth/data/auth.store";
import "@/styles/globals.css";
import {
  ChakraProvider,
  CircularProgress,
  createStandaloneToast,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export const { ToastContainer, toast } = createStandaloneToast();

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function checkAuth() {
      await authStore.checkIfAuthenticated().then(() => setIsLoading(false));
    }

    checkAuth();
  }, []);

  return (
    <ChakraProvider>
      {isLoading ? <CircularProgress /> : <Component {...pageProps} />}

      <ToastContainer />
    </ChakraProvider>
  );
}
