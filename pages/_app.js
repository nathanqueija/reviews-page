import App, {Container} from 'next/app'
import Layout from 'components/shared/Shell'
import withApolloClient from 'lib/apollo/withApolloClient'
import {ApolloProvider} from 'react-apollo'
class MyApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps,
      url: {
        query: router.query,
        pathname: router.pathname,
        asPath: router.asPath
      }
    }
  }

  render() {
    const {Component, pageProps, url, router, apolloClient} = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Layout pageProps={pageProps} router={router}>
            <Component {...pageProps} url={url} router={router} />
          </Layout>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
