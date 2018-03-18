import React, { Component } from 'react'
import Topbar from './Topbar'
import Editer from './Editer'
import MsgList from './MsgList'
import { addComment } from '../actions/messages'
import { connect } from 'react-redux'
class MainPage extends Component {
  componentDidMount() {
    fetch('https://www.ericchoo.cn:3000/getcomments', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'get',
      mode: 'cors'
    })
      .then(res => res.text())

      .then(response => {
        const mesJson = JSON.parse(response)
        mesJson.forEach(each => {
          this.props.dispatch(addComment(each))
        })
      })
  }
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
export default connect()(MainPage)
export { MainPage as MainPage2 }
