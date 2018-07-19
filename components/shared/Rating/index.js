import Container from './styles'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import star from '@fortawesome/fontawesome-free-regular/faStar'
import starFilled from '@fortawesome/fontawesome-free-solid/faStar'

export default ({stars = 5}) => (
  <Container>
    {[...Array(5).keys()].map((icon, index) => (
      <Icon key={icon} icon={index + 1 <= stars ? starFilled : star} />
    ))}
  </Container>
)
