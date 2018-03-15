import React, { Component } from 'react'
import Message from './Message'
class MsgList extends Component {
  render() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
      <div className="msg-list">
        {arr.reverse().map(each => {
          return <Message msg={each} key={each} />
        })}
      </div>
    )
  }
}
export default MsgList
