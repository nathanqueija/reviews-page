import {Component, Fragment} from 'react'
import {withRouter} from 'next/router'
import Head from 'next/head'
import Container, {Main} from './styles'

class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {children} = this.props

    return (
      <Fragment>
        <Head>
          <title>Reviews page</title>
        </Head>
        <Container>
          <Main>{children}</Main>
        </Container>
      </Fragment>
    )
  }
}

export default withRouter(Layout)
