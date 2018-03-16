import * as Actions from './messages'
describe('actions', () => {
  it('Should be exported as function.', () => {
    expect(typeof Actions.updateUser).toBe('function')
    expect(typeof Actions.addMsg).toBe('function')
    expect(typeof Actions.addComment).toBe('function')
  })
})
