import React from 'react'
import { shallow } from 'enzyme'
import Comment from './Comment'
import { Comment2 } from './Comment'
import configureStore from '../store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<Comment store={store} />)
})
it('renders without crashing2', () => {
  shallow(<Comment2 store={store} />)
})
