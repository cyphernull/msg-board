import commentsReducer from './comments'
it('Should return state array properly', () => {
  const state = []
  const action = {
    type: 'ADD_COMMENT',
    comments: {
      from: 'ww2rrr@fff.cc',
      to: 'd@ftt.com',
      comment: 'hahah'
    }
  }
  const expected = [...state, action.comments]
  expect(commentsReducer(state, action)).toEqual(expected)
})
