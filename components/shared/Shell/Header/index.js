import React, {Component} from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default class Header extends Component {
  constructor() {
    super()
  }
  getSlug = (url) => {
    const parts = url.split('/')
    return parts.length > 2 ? parts[parts.length - 2] : ''
  }

  getMenu = () => {
    const {mainNav} = this.props
    return mainNav.items.map((item, index) => {
      if (item.object === 'custom') {
        return (
          <Link href={item.url} key={item.ID}>
            <a>{item.title}</a>
          </Link>
        )
      }
      const slug = this.getSlug(item.url)
      const actualPage = item.object === 'category' ? 'category' : 'post'
      return (
        <Link
          as={`/${item.object}/${slug}`}
          href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
          key={item.ID}
        >
          <a>{item.title}</a>
        </Link>
      )
    })
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>SERVO</title>
        </Head>
        <header>
          <Link href="/">
            <h1>Wordpress Site</h1>
          </Link>
          {this.getMenu()}
        </header>
      </div>
    )
  }
}
