import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import Message from './Message'
import { connect } from 'react-redux'
import { addMsg } from '../actions/messages'
import { addComment } from '../actions/messages'
import moment from 'moment'
class MsgList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentOpen: false,
      text: '',
      to: '',
      from: '',
      uuid: ''
    }
  }
  componentDidMount() {
    fetch('https://www.ericchoo.cn:3000/getlist', {
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
          this.props.dispatch(addMsg(each))
        })
      })
  }
  handleComment = each => {
    /* istanbul ignore next */
    const from = this.props.user[0].email
    /* istanbul ignore next */
    this.setState({ commentOpen: true, to: each.email, from, uuid: each.uuid })
  }
  handlePostComment = () => {
    /* istanbul ignore next */
    fetch('https://www.ericchoo.cn:3000/addcomment', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ ...this.state, time: moment().format('HH:mm'), timestamp: moment().format('X') }),
      mode: 'cors'
    })
      /* istanbul ignore next */
      .then(res => res.text())
      /* istanbul ignore next */
      .then(response => {
        /* istanbul ignore next */
        console.log('Success')
        /* istanbul ignore next */
        this.props.dispatch(addComment(JSON.parse(response)))
        /* istanbul ignore next */
        this.setState({ commentOpen: false })
      })
  }

  handleChange = e => {
    /* istanbul ignore next */
    this.setState({
      text: e.target.value
    })
  }
  handleClose = () => {
    /* istanbul ignore next */
    this.setState({ commentOpen: false })
  }
  render() {
    const actions = [
      <FlatButton label="取消" secondary={true} onClick={this.handleClose} />,
      <FlatButton label="确认" primary={true} onClick={this.handlePostComment} />
    ]
    return (
      <div className="msg-list">
        <Dialog title="请输入回复" modal={true} actions={actions} open={this.state.commentOpen}>
          <TextField floatingLabelText="回复内容" type={'email'} fullWidth={true} onChange={this.handleChange} />
        </Dialog>
        {this.props.messages
          .sort((a, b) => {
            return parseInt(b.timestamp, 10) - parseInt(a.timestamp, 10)
          })
          .map((each, index) => {
            return (
              <Message
                key={index}
                email={each.email}
                time={each.time}
                message={each.text}
                handleComment={this.handleComment}
                uuid={each.uuid}
              />
            )
          })}
      </div>
    )
  }
}
export const mapSateToProps = (state, props) => {
  return {
    messages: state.messages,
    user: state.user
  }
}
export default connect(mapSateToProps)(MsgList)
export { MsgList }
