import Container from './styles'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import search from '@fortawesome/fontawesome-free-solid/faSearch'

export default ({onChange}) => (
  <Container>
    <input type="text" placeholder="Search" onChange={onChange} />
    <Icon icon={search} />
  </Container>
)
