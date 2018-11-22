import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en-US" className="font-serif leading-normal text-scale-0 bg-darkest pb-1">
        <Head />
        <body className="bg-lightest">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
