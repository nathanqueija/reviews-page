import {Component, Fragment} from 'react'
import {getCustomContentType} from 'services/content-api'
import Head from 'next/head'
import {addCount} from 'lib/redux/store'
import {connect} from 'react-redux'
import SearchField from 'components/shared/SearchField'
import Dropdown from 'components/shared/Dropdown'
import RatingFilter from 'components/shared/RatingFilter'

import Review from 'components/shared/Review'

import Container, {Filters, Ordering} from './styles'

class Index extends Component {
  static async getInitialProps() {
    // const homeSlider = await getCustomContentType('sliders', 63)
    // const courses = await getCustomContentType('cursos')
    return {}
  }

  componentDidMount() {}
  render() {
    const {count, addCount} = this.props
    const seoTitle = 'Reviews Page'
    return (
      <Container>
        <Head>
          <title>{seoTitle}</title>
          <meta name="twitter:title" content={seoTitle} />
        </Head>
        <Filters>
          <SearchField />
          <Ordering>
            <Dropdown
              placeholder="Group by"
              values={[
                {value: 0, label: 'day'},
                {value: 1, label: 'week'},
                {value: 2, label: 'month'}
              ]}
            />
            <Dropdown
              placeholder="Order by"
              values={[{value: 0, label: 'ASC'}, {value: 1, label: 'DESC'}]}
            />
          </Ordering>
          <h6>FILTER BY:</h6>
          <RatingFilter />
        </Filters>

        <button onClick={() => addCount()}>Counter: {count}</button>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </Container>
    )
  }
}

const mapStateToProps = ({lastUpdate, count}) => ({
  lastUpdate,
  count
})

export default connect(
  mapStateToProps,
  {addCount}
)(Index)
