import {Component, Fragment} from 'react'
import Head from 'next/head'
import {getContent} from 'services/content-api'

export default class Index extends Component {
  static async getInitialProps(context) {
    const {slug, apiRoute} = context.query
    const content = await getContent(apiRoute, slug)

    return {content: content.data}
  }
  render() {
    const {content} = this.props
    const seoTitle = content.title.rendered
    return (
      <Fragment>
        <Head>
          <title>{seoTitle}</title>
          <meta name="twitter:title" content={seoTitle} />
        </Head>
        <div
          dangerouslySetInnerHTML={{
            __html: content.content.rendered
          }}
        />
      </Fragment>
    )
  }
}
