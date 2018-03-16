import userReducer from './user'
it('Should return state array properly', () => {
  const state = []
  const action = {
    type: 'UPDATE_USER',
    user: {
      email: 'ww2rrr@fff.cc',
      isValid: true
    }
  }
  const expected = [...state, action.user]
  expect(userReducer(state, action)).toEqual(expected)
})
