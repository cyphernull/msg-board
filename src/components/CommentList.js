import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
class CommentList extends Component {
  render() {
    return (
      <div className="comment-list">
        {this.props.comments
          .sort((a, b) => {
            return parseInt(b.timestamp, 10) - parseInt(a.timestamp, 10)
          })
          .map(each => {
            if (this.props.origin === each.uuid) {
              return <Comment key={each.timestamp} email={each.from} time={each.time} comment={each.text} />
            } else {
              return null
            }
          })}
      </div>
    )
  }
}
const mapSateToProps = (state, props) => {
  return {
    comments: state.comments
  }
}
export default connect(mapSateToProps)(CommentList)
