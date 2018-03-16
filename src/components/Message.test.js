import React from 'react'
import { shallow, mount } from 'enzyme'
import { Message } from './Message'
import { mapSateToProps } from './Message'
it('renders without crashing', () => {
  const wrapper = shallow(<Message user={[{ emial: 'eric@.hahcom' }]} />)
})
it('map state properly', () => {
  const state = {}
  const props = {}
  expect(typeof mapSateToProps(state, props)).toBe('object')
})
it('call method', () => {
  const wrapper = shallow(<Message user={[{ emial: 'eric@.hahcom' }]} handleComment={jest.fn()} />)
  const spy = jest.spyOn(wrapper.instance(), 'handleClick')
  wrapper.find('.card-action-btn').simulate('click')
})
