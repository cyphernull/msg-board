import React from 'react'
import { shallow } from 'enzyme'
import MsgList from './MsgList'
import { MsgList as MsgList2 } from './MsgList'
import { mapSateToProps } from './MsgList'
import configureStore from '../store/configureStore'
const store = configureStore()

it('renders without crashing', () => {
  shallow(<MsgList store={store} />)
})
it('call method1', () => {
  const wrapper = shallow(
    <MsgList2
      messages={[{ emial: 'eric@.hahcom', timestamp: '15785687' }, { emial: 'eric@.hahcom', timestamp: '15785699' }]}
      dispatch={jest.fn()}
    />
  )
  // const spy = jest.spyOn(wrapper.instance(), 'handleClick')
  // wrapper.find('.card-action-btn').simulate('click')
})
