import customTheme from "@/shared/theme";
import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export const { ToastContainer, toast } = createStandaloneToast();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
      <ToastContainer />
    </ChakraProvider>
  );
}
