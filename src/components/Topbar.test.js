import React from 'react'
import { shallow } from 'enzyme'
import Topbar from './Topbar'
import configureStore from '../store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<Topbar store={store} />)
})
