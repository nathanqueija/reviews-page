/* eslint-env jest */
import {shallow} from 'enzyme'
import Dropdown from 'components/shared/Dropdown'
import 'jest-styled-components'

describe('<Dropdown />', () => {
  it('should start closed', () => {
    const wrapper = shallow(<Dropdown />)
    const state = wrapper.state().opened
    expect(state).toBeFalsy()
  })
})
