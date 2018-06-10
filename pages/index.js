import {Component, Fragment} from 'react'
import {Query} from 'react-apollo'

import Head from 'next/head'
import {GET_POSTS} from 'graphql/posts/queries'

export default class Index extends Component {
  render() {
    const seoTitle = 'SITE | INDEX'
    return (
      <Fragment>
        <Head>
          <title>{seoTitle}</title>
          <meta name="twitter:title" content={seoTitle} />
        </Head>
        <Query query={GET_POSTS}>
          {({loading, data}) => JSON.stringify(data)}
        </Query>
      </Fragment>
    )
  }
}
