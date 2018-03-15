const messagesReducerDefaultState = []
const messagesReducer = (state = messagesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      return [action.message, ...state]
    }
    default: {
      return state
    }
  }
}
export default messagesReducer
