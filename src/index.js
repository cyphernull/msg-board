import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './style/main.css'
const store = configureStore()
const MsgBoard = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(MsgBoard, document.getElementById('root'))
