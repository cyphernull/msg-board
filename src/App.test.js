import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import configureStore from './store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<App store={store} />)
})
