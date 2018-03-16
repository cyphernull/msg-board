import React from 'react'
import { shallow } from 'enzyme'
import MainPage from './MainPage'
import { MainPage2 } from './MainPage'
import configureStore from '../store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<MainPage store={store} />)
})
it('call method', () => {
  const wrapper = shallow(<MainPage2 dispatch={jest.fn()} />)
  // const spy = jest.spyOn(wrapper.instance(), 'handleClick')
  // wrapper.find('.card-action-btn').simulate('click')
})
