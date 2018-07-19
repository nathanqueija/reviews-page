import App, {Container} from 'next/app'
import Layout from 'components/shared/Shell'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import {initStore} from 'lib/redux/store'

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
    }

    constructor(props) {
      super(props)
    }

    render() {
      const {Component, pageProps, store} = this.props
      return (
        <Container>
          <Provider store={store}>
            <Layout pageProps={pageProps}>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </Container>
      )
    }
  }
)
