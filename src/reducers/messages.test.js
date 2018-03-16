import messagesReducer from './messages'
it('Should return state array properly', () => {
  const state = []
  const action = {
    type: 'ADD_MESSAGE',
    message: {
      email: 'ww2rrr@fff.cc',
      time: '13:09',
      text: 'yes'
    }
  }
  const expected = [...state, action.message]
  expect(messagesReducer(state, action)).toEqual(expected)
})
