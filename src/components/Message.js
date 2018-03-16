import React, { Component } from 'react'
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import MD5 from 'crypto-js/md5'
import CommentList from './CommentList'
class Message extends Component {
  handleClick = () => {
    this.props.handleComment(this.props)
  }
  render() {
    return (
      <Card className="card">
        <CardHeader
          avatar={'https://www.gravatar.com/avatar/' + MD5(this.props.email)}
          title={this.props.email}
          subtitle={this.props.time}
          className="editer-header"
        />
        <CardText>{this.props.message}</CardText>
        <CardActions className="card-action">
          <FlatButton
            label="回复"
            primary={true}
            disabled={this.props.user[0] === undefined}
            onClick={this.handleClick}
          />
        </CardActions>
        <CardText>
          <CommentList origin={this.props.uuid} />
        </CardText>
      </Card>
    )
  }
}
const mapSateToProps = (state, props) => {
  return {
    user: state.user
  }
}
export default connect(mapSateToProps)(Message)
