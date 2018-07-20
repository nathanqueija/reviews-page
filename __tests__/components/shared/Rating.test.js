/* eslint-env jest */
import {shallow} from 'enzyme'
import Rating from 'components/shared/Rating'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'

describe('<Rating />', () => {
  it('should display 5 stars', () => {
    const wrapper = shallow(<Rating />)
    expect(wrapper.find(Icon)).toHaveLength(5)
  })
})
