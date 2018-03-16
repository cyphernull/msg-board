import React from 'react'
import { shallow } from 'enzyme'
import Comment from './Comment'
import configureStore from '../store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<Comment store={store} />)
})
