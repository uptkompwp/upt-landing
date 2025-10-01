import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo-upt.png"></link>
        <link rel="shortcut icon" href="/logo-upt.png" type="image/x-icon" />
        <meta name="theme-color" content="#FF0080" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
