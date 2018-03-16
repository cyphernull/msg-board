import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { fullWhite } from 'material-ui/styles/colors'
import { connect } from 'react-redux'
class Topbar extends Component {
  /* istanbul ignore next line */
  handleClick = () => {
    /* istanbul ignore next */
    localStorage.removeItem('email')
    /* istanbul ignore next */
    window.location.reload()
  }

  render() {
    return (
      <div>
        <AppBar
          title="·留言板"
          showMenuIconButton={false}
          iconElementRight={
            /* istanbul ignore next */
            this.props.user[0] === undefined /* istanbul ignore next */ ? /* istanbul ignore next */
            null : (
              /* istanbul ignore next */

              /* istanbul ignore next */
              <IconMenu
                iconButtonElement={
                  <IconButton>
                    <MoreVertIcon color={fullWhite} />
                  </IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem primaryText="退出" onClick={this.handleClick} />
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
export { Topbar as Topbar2 }
