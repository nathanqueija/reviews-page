import {Component} from 'react'
import Link from 'next/link'
import Container, {Menu, Navigation, MenuItem, Logo} from './styles'

export default class Header extends Component {
  constructor() {
    super()
  }
  getSlug = (url) => {
    const parts = url.split('/')
    return parts.length > 2 ? parts[parts.length - 2] : ''
  }

  getNavigation = () => {
    const {mainNav} = this.props
    return mainNav.items.map((item) => {
      if (item.object === 'custom') {
        return (
          <Link href={item.url} key={item.ID}>
            <MenuItem color={item.acf.Cor}>
              <span>{item.title}</span>
            </MenuItem>
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
          <MenuItem color={item.acf.Cor}>
            <span>{item.title}</span>
          </MenuItem>
        </Link>
      )
    })
  }

  render() {
    const {sliderHeight} = this.props
    return (
      <Container>
        <Menu>
          <Link href="/">
            <Logo>
              <img src="/static/img/logo.jpg" alt="Seminário Servo de Cristo" />
            </Logo>
          </Link>

          <Navigation>
            <ul>{this.getNavigation()}</ul>
          </Navigation>
        </Menu>
      </Container>
    )
  }
}
