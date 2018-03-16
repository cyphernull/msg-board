import React from 'react'
import { shallow } from 'enzyme'
import Message from './Message'
import configureStore from '../store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<Message store={store} />)
})
