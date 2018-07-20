import {Component} from 'react'
import _ from 'lodash'
import moment from 'moment'
import Container, {
  Footer,
  Wrapper,
  EntriesTitle,
  EntriesContainer
} from './styles'
export default class InfiniteScroll extends Component {
  static defaultProps = {
    threshold: 10
  }

  state = {
    loading: false
  }

  componentDidMount() {
    document.addEventListener('mousewheel', this.onScroll)
    document.addEventListener('touchmove', this.onScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('mousewheel', this.onScroll)
    document.removeEventListener('touchmove', this.onScroll)
  }

  // Distance from the bottom of the viewport to the footer element
  get footerViewportDistance() {
    if (!this.footer) return null
    const rect = this.footer.getBoundingClientRect()
    return (rect.y || rect.bottom) - window.innerHeight
  }

  shouldTriggerLoad = () => {
    const {threshold} = this.props
    const distance = this.footerViewportDistance
    return !isNaN(distance) && distance <= threshold
  }

  loadMore = async () => {
    const {onLoad} = this.props

    this.setState({loading: true})
    await onLoad()
    this.setState({loading: false})
  }

  onScroll = _.throttle(() => {
    const {hasMore} = this.props
    const {loading} = this.state
    const {onLoad} = this.props
    if (this.shouldTriggerLoad() && hasMore > 0 && !loading && onLoad)
      this.loadMore()
  }, 500)

  getEntriesTitle = (title) => {
    const {group} = this.props
    switch (group) {
      case 'month':
        return moment(new Date(title)).format('MMMM')
      case 'day':
        return moment(new Date(title)).format('MM.DD.YYYY')
      case 'week':
        return `${moment(new Date(title)).format('MM.DD.YYYY')} - ${moment(
          new Date(title)
        )
          .add(7, 'days')
          .format('MM.DD.YYYY')}`

      default:
        return ''
    }
  }

  getEntries = () => {
    const {entries, children: renderEntry} = this.props

    if (_.isArray(entries)) return entries.map(renderEntry)

    return Object.keys(entries).map((item) => {
      return (
        <EntriesContainer key={item}>
          <EntriesTitle>
            {this.getEntriesTitle(item)}
            {entries[item].length > 1 && ` (${entries[item].length} reviews)`}
          </EntriesTitle>
          {entries[item].map(renderEntry)}
        </EntriesContainer>
      )
    })
  }

  render() {
    const {entries, hasMore} = this.props

    return (
      <Wrapper innerRef={(wrapper) => (this.wrapper = wrapper)}>
        <Container>{this.getEntries()}</Container>

        <Footer innerRef={(footer) => (this.footer = footer)}>
          {hasMore
            ? `Loading ${entries.length ? 'more ' : ''}reviews...`
            : 'These are all the reviews for now :)'}
        </Footer>
      </Wrapper>
    )
  }
}
