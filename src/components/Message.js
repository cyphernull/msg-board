import React, { Component } from 'react'
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card'
import MD5 from 'crypto-js/md5'
class Message extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card className="card">
        <CardHeader
          avatar={'https://www.gravatar.com/avatar/' + MD5('sdfsd')}
          title="eric"
          subtitle="eric"
          className="editer-header"
        />
        <CardText>{this.props.msg}</CardText>
      </Card>
    )
  }
}

export default Message
