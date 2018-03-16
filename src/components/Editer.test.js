import React from 'react'
import { shallow } from 'enzyme'
import Editer from './Editer'
import { Editer2 } from './Editer'
import configureStore from '../store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<Editer store={store} />)
})
it('renders without crashing 2', () => {
  shallow(<Editer2 store={store} dispatch={jest.fn()} />)
})
it('call method', () => {
  const wrapper = shallow(<Editer2 user={[{ emial: 'eric@.hahcom' }]} dispatch={jest.fn()} />)
  const spy = jest.spyOn(wrapper.instance(), 'handleClick')
  wrapper.find('.editer-card-btn').simulate('click')
})
