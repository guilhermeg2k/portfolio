import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Guilherme's portfolio" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link ref="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Montez&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}