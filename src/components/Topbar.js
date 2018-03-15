import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { fullWhite } from 'material-ui/styles/colors'
import { connect } from 'react-redux'
class Topbar extends Component {
  handleLogout = () => {
    localStorage.removeItem('email')
    window.location.reload()
  }
  render() {
    return (
      <div>
        <AppBar
          title="留言板"
          showMenuIconButton={false}
          iconElementRight={
            this.props.user[0] === undefined ? null : (
              <IconMenu
                iconButtonElement={
                  <IconButton>
                    <MoreVertIcon color={fullWhite} />
                  </IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem primaryText="退出" onClick={this.handleLogout} />
              </IconMenu>
            )
          }
        />
      </div>
    )
  }
}
const mapSateToProps = (state, props) => {
  return {
    user: state.user
  }
}
export default connect(mapSateToProps)(Topbar)
