import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US" className="font-serif antialiased leading-normal bg-lighter">
        <Head />
        <body className="bg-lightest">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
