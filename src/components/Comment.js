import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import { ListItem } from 'material-ui/List'
import MD5 from 'crypto-js/md5'
class Comment extends Component {
  render() {
    return (
      <ListItem
        primaryText={this.props.comment}
        secondaryText={
          <p>
            {this.props.email}
            <span style={{ color: '#acacac' }}>{' -- ' + this.props.time}</span>
          </p>
        }
        secondaryTextLines={2}
        leftAvatar={<Avatar src={'https://www.gravatar.com/avatar/' + MD5(this.props.email)} />}
      />
    )
  }
}

export default Comment
export { Comment as Comment2 }
