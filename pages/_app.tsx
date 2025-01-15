import BaseLayout from "@/components/BaseLayout";
import useLoading from "@/hooks/useLoading";
import { store } from "@/store/store";
import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import "nprogress/nprogress.css";
import { Provider } from "react-redux";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BaseLayout className={inter.className}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
            <link rel="shortcut icon" href="/logo-upt.png" type="image/x-icon" />
          </Head>
          <Component {...pageProps} />
        </BaseLayout>
      </ChakraProvider>
    </Provider>
  );
}
