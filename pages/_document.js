import Document, { Head, Main, NextScript } from 'next/document'
import { getPath } from '../helpers'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en-US" className="font-serif leading-normal text-scale-0 bg-darkest">
        <Head>
          <link rel="icon" href={getPath('/static/favicon.ico')} />
        </Head>
        <body className="bg-lightest">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
