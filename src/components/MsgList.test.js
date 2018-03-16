import React from 'react'
import { shallow } from 'enzyme'
import MsgList from './MsgList'
import configureStore from '../store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<MsgList store={store} />)
})
