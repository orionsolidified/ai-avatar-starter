import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Kara Gen - by Tagachi" key="title" />
        <meta
          property="og:description"
          content="Turn Kara into anyone you want! Make sure you refer to me as 'kara' in the prompt"
          key="description"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>

        <meta
          property="og:image"
          content="https://og.railway.app/api/image?fileType=png&layoutName=Simple&Text=Kara+Gen"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
