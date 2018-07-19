import {Component} from 'react'
import Container, {Values, Value, ValueSelected} from './styles'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import caret from '@fortawesome/fontawesome-free-solid/faCaretDown'

export default class Dropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false
    }
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.handleClick)
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleClick)
  }

  handleClick = (e) => {
    if (!this.state.opened || this.container.contains(e.target)) return
    this.setState({opened: false})
    e.stopPropagation()
  }

  toggleMenu = () =>
    this.setState(({opened}) => {
      return {opened: !opened}
    })

  selectValue = (selected) => this.setState({selected})

  render() {
    const {opened, selected} = this.state
    const {toggleMenu, selectValue} = this
    const {values, placeholder = ''} = this.props
    return (
      <Container
        onClick={toggleMenu}
        innerRef={(container) => (this.container = container)}
      >
        <ValueSelected>
          {selected ? `${placeholder} ${selected.label}` : placeholder}
        </ValueSelected>
        {opened && (
          <Values>
            {values.map(({value, label}) => (
              <Value
                onClick={selectValue.bind(this, {value, label})}
                key={value}
              >
                {label}
              </Value>
            ))}
          </Values>
        )}
        <Icon icon={caret} />
      </Container>
    )
  }
}
