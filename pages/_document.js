import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import globalStyles from 'styles/global'

export default class AppDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = [sheet.getStyleElement()]
    return {...page, styleTags}
  }

  render() {
    const {styleTags} = this.props

    return (
      <html>
        <Head>
          {styleTags}
          {globalStyles}
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800"
            rel="stylesheet"
          />

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <link
            rel="shortcut icon"
            href={`https://res.cloudinary.com/emcasa/image/upload/v1523561414/${
              process.env.REACT_APP_FAVICON
            }`}
            key="favicon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
