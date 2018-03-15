const commentsReducerDefaultState = []
const commentsReducer = (state = commentsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT': {
      return [action.comments, ...state]
    }
    default: {
      return state
    }
  }
}
export default commentsReducer
