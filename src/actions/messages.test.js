import * as Actions from './messages'
describe('actions', () => {
  it('Should be exported as function.', () => {
    expect(typeof Actions.updateUser).toBe('function')
    expect(typeof Actions.addMsg).toBe('function')
    expect(typeof Actions.addComment).toBe('function')
  })
  it('Should return object', () => {
    const data = {
      email: 'eric@eric.com',
      isValid: true
    }
    const expected = {
      type: 'UPDATE_USER',
      user: data
    }
    expect(Actions.updateUser(data)).toEqual(expected)
  })
  it('Should return object', () => {
    const data = {
      email: 'eric@eric.com',
      isValid: true
    }
    const expected = {
      type: 'ADD_MESSAGE',
      message: data
    }
    expect(Actions.addMsg(data)).toEqual(expected)
  })
  it('Should return object', () => {
    const data = {
      email: 'eric@eric.com',
      isValid: true
    }
    const expected = {
      type: 'ADD_COMMENT',
      comments: data
    }
    expect(Actions.addComment(data)).toEqual(expected)
  })
})
