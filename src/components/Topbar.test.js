import React from 'react'
import { shallow, render } from 'enzyme'
import Topbar from './Topbar'
import { Topbar2 } from './Topbar'
import configureStore from '../store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<Topbar store={store} />)
})
it('renders without crashing2', () => {
  shallow(<Topbar2 store={store} user={[{ email: 'fsfgc@gc.com' }]} />)
})
it('call method', () => {
  const wrapper = shallow(<Topbar2 store={store} user={[true]} />)
  // wrapper.find('.top-bar-btn').simulate('click')
})
