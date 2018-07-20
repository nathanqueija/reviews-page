import {Component} from 'react'
import _ from 'lodash'
import Head from 'next/head'
import {connect} from 'react-redux'
import SearchField from 'components/shared/SearchField'
import Dropdown from 'components/shared/Dropdown'
import RatingFilter from 'components/shared/RatingFilter'
import Review from 'components/shared/Review'
import Container, {
  Header,
  Filters,
  Ordering,
  Refetch,
  NoEntries
} from './styles'
import {fetch as fetchReviews, refetch as refetchReviews} from 'actions/reviews'
import InfiniteScroll from 'components/shared/InfiniteScroll'
import {search, ratings, order} from 'lib/filters'

import moment from 'moment'

class Index extends Component {
  state = {
    filters: {
      search: {filter: search, on: false},
      ratings: {filter: ratings, on: false}
    },
    ordering: {
      time: {order: order, on: false}
    }
  }
  componentWillMount() {
    const {fetchReviews} = this.props
    fetchReviews(1)
  }

  fetchMore = async () => {
    const {fetchReviews, reviews} = this.props
    await fetchReviews(reviews.page)
  }

  refetch = () => {
    const {refetchReviews} = this.props
    refetchReviews()
  }

  onChangeSearch = (e) => {
    const {filters} = this.state
    const newFilters = {...filters}

    if (e.target.value.length > 0) {
      newFilters.search.on = true
      newFilters.search.value = e.target.value
    } else if (e.target.value.length === 0) {
      newFilters.search.on = false
    }

    this.setState({filters: newFilters})
  }

  onChangeRating = (rating) => {
    const {filters} = this.state
    const newFilters = {...filters}

    newFilters.ratings.on = true
    newFilters.ratings.value = rating

    this.setState({filters: newFilters})
  }

  onChangeOrder = (order) => {
    const {ordering} = this.state
    const newOrdering = {...ordering}
    newOrdering.time.on = true
    newOrdering.time.value = order.label
    this.setState({ordering: newOrdering})
  }

  onChangeGroup = (group) => this.setState({group: group.label})

  getFilteredReviews = () => {
    const {filters, ordering, group} = this.state
    const {reviews} = this.props

    const activeFilters = _.pickBy(filters, (value) => value.on)
    const activeOrdering = _.pickBy(ordering, (value) => value.on)

    let filteredReviews = reviews.reviews.filter((review) =>
      Object.values(activeFilters).every(({filter, value}) =>
        filter(value, review)
      )
    )

    Object.keys(activeOrdering).forEach((key) => {
      const {order, value} = ordering[key]
      filteredReviews = order(value, filteredReviews)
    })

    if (group) {
      let grouped_items = _.groupBy(filteredReviews, ({reviewCreated}) =>
        moment(reviewCreated).startOf(group)
      )
      return grouped_items
    } else {
      return filteredReviews
    }
  }

  render() {
    const {reviews} = this.props
    const {group} = this.state
    const {
      fetchMore,
      refetch,
      onChangeSearch,
      onChangeRating,
      getFilteredReviews,
      onChangeOrder,
      onChangeGroup
    } = this
    const seoTitle = 'Reviews Page'

    const entries = getFilteredReviews()

    return (
      <Container>
        <Head>
          <title>{seoTitle}</title>
          <meta name="twitter:title" content={seoTitle} />
        </Head>
        <Header>
          <Filters>
            <SearchField onChange={onChangeSearch} />
            <Ordering>
              <Dropdown
                placeholder="Group by"
                onChange={onChangeGroup}
                values={[
                  {value: 0, label: 'day'},
                  {value: 1, label: 'week'},
                  {value: 2, label: 'month'}
                ]}
              />
              <Dropdown
                placeholder="Order by"
                values={[{value: 0, label: 'ASC'}, {value: 1, label: 'DESC'}]}
                onChange={onChangeOrder}
              />
            </Ordering>
            <h6>FILTER BY:</h6>
            <RatingFilter onChange={onChangeRating} />
          </Filters>
          <Refetch>
            <button disabled={reviews.loading} onClick={refetch}>
              {reviews.loading ? 'FETCHING...' : 'REFETCH'}
            </button>
          </Refetch>
        </Header>
        {!_.isEmpty(entries) || reviews.loading ? (
          <InfiniteScroll
            entries={getFilteredReviews()}
            hasMore={reviews.hasMore}
            onLoad={fetchMore}
            group={group}
          >
            {(review) => <Review key={review.reviewId} {...review} />}
          </InfiniteScroll>
        ) : (
          <NoEntries>
            No reviews found. Please try again with different filters.
          </NoEntries>
        )}
      </Container>
    )
  }
}

const mapStateToProps = ({reviews}) => ({
  reviews
})

export default connect(
  mapStateToProps,
  {fetchReviews, refetchReviews}
)(Index)
