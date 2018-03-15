const userReducerDefaultState = []
const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      return [...state, action.user]
    }
    default: {
      return state
    }
  }
}
export default userReducer
