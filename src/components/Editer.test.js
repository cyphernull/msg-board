// import React from 'react'
// import { shallow } from 'enzyme'
// import Editer from './Editer'
// it('When click , onAddClick() shoule be called', () => {
//   const wrapper = shallow(<Editer handleClick={jest.fn()} />)
//   wrapper.find('button').simulate('click')
//   expect(props.onAddClick).toBeCalled()
// })
import React from 'react'
import { shallow } from 'enzyme'
import Editer from './Editer'
import configureStore from '../store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<Editer store={store} />)
})
