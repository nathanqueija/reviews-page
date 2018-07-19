import {Component} from 'react'
import Container, {Rate, Checkbox} from './styles'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import starFilled from '@fortawesome/fontawesome-free-solid/faStar'

export default class RatingFilter extends Component {
  render() {
    return (
      <Container>
        {[...Array(5).keys()].map((icon) => (
          <Rate key={icon}>
            <Checkbox>
              <input
                defaultChecked={true}
                id={`checkbox${icon}`}
                type="checkbox"
                value={icon + 1}
              />
              <label htmlFor={`checkbox${icon}`} />
            </Checkbox>
            <span>{icon + 1}</span>
            <Icon key={icon} icon={starFilled} />
          </Rate>
        ))}
      </Container>
    )
  }
}
