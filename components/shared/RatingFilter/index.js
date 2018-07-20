import {Component} from 'react'
import Container, {Rate, Checkbox} from './styles'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import starFilled from '@fortawesome/fontawesome-free-solid/faStar'
import _ from 'lodash'

export default class RatingFilter extends Component {
  state = {
    checked: [1, 2, 3, 4, 5]
  }

  onChange = (e) => {
    const {checked} = this.state
    const {onChange} = this.props
    const index = checked.indexOf(parseInt(e.target.name))
    const newChecked = [...checked]
    if (e.target.checked && index === -1) {
      newChecked.push(parseInt(e.target.name))
    } else if (!e.target.checked && index > -1) {
      _.pullAt(newChecked, [index])
    }
    this.setState({checked: newChecked})
    onChange && onChange(newChecked)
  }

  render() {
    return (
      <Container>
        {[...Array(5).keys()].map((icon) => (
          <Rate key={icon}>
            <Checkbox>
              <input
                defaultChecked={true}
                name={icon + 1}
                id={`checkbox${icon}`}
                type="checkbox"
                value={icon + 1}
                onClick={this.onChange}
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
