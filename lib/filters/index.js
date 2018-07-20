import _ from 'lodash'
import moment from 'moment'
export const search = (term, {content, title, productTitle, childAsin}) =>
  (content + title + productTitle + childAsin)
    .toLowerCase()
    .includes(term.toLowerCase())

export const ratings = (ratings, {stars}) => ratings.indexOf(stars) > -1

export const order = (ordering, reviews) => {
  const ordered = _.sortBy(
    reviews,
    ({reviewCreated}) => new moment(reviewCreated)
  )

  return ordering === 'DESC' ? ordered : ordered.reverse()
}
