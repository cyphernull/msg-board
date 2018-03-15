import { createStore, combineReducers } from 'redux'
import messagesReducer from '../reducers/messages'
import commentsReducer from '../reducers/comments'
import userReducer from '../reducers/user'
export default () => {
  const store = createStore(
    combineReducers({
      messages: messagesReducer,
      user: userReducer,
      comments: commentsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
