import React from 'react'
import { shallow, mount } from 'enzyme'
import CommentList from './CommentList'
import { CommentList2 } from './CommentList'
import configureStore from '../store/configureStore'
import { Provider } from 'react-redux'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<CommentList store={store} />)
})
it('renders without crashing2', () => {
  shallow(
    <CommentList2
      store={store}
      origin="99"
      comments={[{ timestamp: '23686287', uuid: '89' }, { timestamp: '789797', uuid: '99' }]}
    />
  )
})
