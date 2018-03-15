import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import MD5 from 'crypto-js/md5'
class Topbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailAddress: ''
    }
  }
  render() {
    return (
      <div>
        <AppBar
          title="留言板"
          showMenuIconButton={false}
          iconElementRight={
            <Avatar size={48} src={'https://www.gravatar.com/avatar/' + MD5('eric.choo1997@yahoo.com')} />
          }
        />
      </div>
    )
  }
}

export default Topbar
