import {
  ChakraProvider,
  ColorModeScript,
  createStandaloneToast,
  extendTheme,
} from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

export const { ToastContainer, toast } = createStandaloneToast();

const themeConfig = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="light" />
    <ChakraProvider theme={themeConfig}>
      <RouterProvider router={router} />
    </ChakraProvider>
    <ToastContainer />
  </React.StrictMode>,
);
