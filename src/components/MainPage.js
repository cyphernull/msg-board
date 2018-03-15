import React, { Component } from 'react'
import Topbar from './Topbar'
import Editer from './Editer'
import MsgList from './MsgList'
class MainPage extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Editer />
        <hr style={{ height: '1px', border: 'none', borderTop: '1px dashed #b5b5b5', margin: '20px 10px' }} />
        <MsgList />
      </div>
    )
  }
}

export default MainPage
