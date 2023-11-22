import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Viva Versa</title>
        <meta property="og:title" content="Viva Versa" key="title" />
        <link rel="shortcut icon" href="/static/logo.svg" />
        <meta name="description" content="Digital Marketing Agency" key="desc"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
