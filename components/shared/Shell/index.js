import {Component, Fragment} from 'react'
import {withRouter} from 'next/router'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import Container, {Main} from './styles'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => NProgress.done()

class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {errorCode, pageProps, url, router, children} = this.props

    return (
      <Fragment>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/styles/nprogress.css"
          />
        </Head>
        <Container>
          <Main>{children}</Main>
        </Container>
      </Fragment>
    )
  }
}

export default withRouter(Layout)
