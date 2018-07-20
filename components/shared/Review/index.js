import Container, {
  ReviewHead,
  ReviewInfoContainer,
  ReviewInfo,
  ProfilePicture,
  Review
} from './styles'
import Rating from 'components/shared/Rating'
import moment from 'moment'

export default ({
  reviewCreated,
  stars,
  content,
  title,
  childAsin,
  productTitle
}) => (
  <Container>
    <ReviewHead>
      <ProfilePicture />
      <ReviewInfoContainer>
        <ReviewInfo>
          <span>Date</span>
          <span>{moment(reviewCreated).format('MM.DD.YYYY')}</span>
        </ReviewInfo>
        <ReviewInfo>
          <span>Stars</span>
          <Rating stars={stars} />
        </ReviewInfo>
        <ReviewInfo>
          <span>{childAsin}</span>
          <span>{productTitle}</span>
        </ReviewInfo>
      </ReviewInfoContainer>
      <ReviewInfo />
    </ReviewHead>
    <Review>
      <h6>{title}</h6>
      <p>{content}</p>
    </Review>
  </Container>
)
