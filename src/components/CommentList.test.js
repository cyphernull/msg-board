import React from 'react'
import { shallow } from 'enzyme'
import CommentList from './CommentList'
import configureStore from '../store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<CommentList store={store} />)
})
