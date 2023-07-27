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
<<<<<<< HEAD
import { Provider } from "react-redux";
=======
import { useEffect, useState } from "react";
>>>>>>> 1032f0e1f0f2a93a89b8e5bccc779c4fc1c27fa3

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// design and code by farriq muwaffaq
export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BaseLayout className={inter.className}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
          </Head>
          <Component {...pageProps} />
        </BaseLayout>
      </ChakraProvider>
    </Provider>
=======
  const loading = useLoading();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <BaseLayout className={inter.className}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Head>
        {mounted ? <Component {...pageProps} /> : <></>}
      </BaseLayout>
    </ChakraProvider>
>>>>>>> 1032f0e1f0f2a93a89b8e5bccc779c4fc1c27fa3
  );
}
