import Container, {
  ReviewHead,
  ReviewInfoContainer,
  ReviewInfo,
  ProfilePicture,
  Review
} from './styles'
import Rating from 'components/shared/Rating'

export default ({date, stars, author, text}) => (
  <Container>
    <ReviewHead>
      <ProfilePicture />
      <ReviewInfoContainer>
        <ReviewInfo>
          <span>Date</span>
          <span>12.12.2017</span>
        </ReviewInfo>
        <ReviewInfo>
          <span>Stars</span>
          <Rating stars={3} />
        </ReviewInfo>
        <ReviewInfo>
          <span>BO16hwer</span>
          <span>Anker SoundCore lalala Teste 123</span>
        </ReviewInfo>
      </ReviewInfoContainer>
      <ReviewInfo />
    </ReviewHead>
    <Review>
      <h6>Review Title</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        ultricies elit a lacus semper lacinia. Sed et orci nulla. Nunc laoreet
        ornare justo, vitae pulvinar tellus. Phasellus eleifend felis iaculis
        turpis ultricies, quis ornare est elementum. Cras lacinia vel dolor id
        pharetra. Duis molestie leo vitae leo mollis viverra. Quisque elementum
        tortor ut turpis aliquam porttitor. Nulla ex felis, ultricies at purus
        id, mollis pulvinar nibh. Duis purus neque, eleifend ut sem ut, eleifend
        sagittis tellus. Mauris at posuere lacus. Duis sed tellus velit. Duis
        maximus vitae felis id imperdiet.
      </p>
    </Review>
  </Container>
)
