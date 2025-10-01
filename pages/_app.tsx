import BaseLayoutVersion2 from "@/components/v2/BaseLayout";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import "nprogress/nprogress.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayoutVersion2 className={inter.className} >
      <Component {...pageProps} />
    </BaseLayoutVersion2>
  );
}
