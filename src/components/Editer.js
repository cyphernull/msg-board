import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import MD5 from 'crypto-js/md5'
import { addMsg, updateUser } from '../actions/messages'
import moment from 'moment'
import uuid from 'uuid/v1'
class Editer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      open: false,
      time: moment().format('HH:mm'),
      isValid: false,
      text: ''
    }
  }
  componentDidMount() {
    // eslint-disable-next-line
    localStorage.getItem('email') !== null
      ? this.setState({ email: localStorage.getItem('email'), isValid: true }, () => {
          this.props.dispatch(updateUser(this.state))
        })
      : null
    setInterval(() => {
      this.setState({ time: moment().format('HH:mm') })
    }, 1000)
  }
  handleClick = () => {
    this.state.email === '' ? this.setState({ open: true }) : this.handleMessage()
  }
  handleClose = () => {
    this.setState({ open: false, email: '' })
  }
  handleEmail = () => {
    this.setState({ open: false }, () => {
      this.props.dispatch(updateUser(this.state))
    })
  }
  handleChange = e => {
    // eslint-disable-next-line
    const reg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g
    reg.test(e.target.value)
      ? this.setState({ email: e.target.value, isValid: true }, () => {
          localStorage.setItem('email', this.state.email)
        })
      : this.setState({ isValid: false })
  }
  handleTextChange = e => {
    this.setState({ text: e.target.value })
  }
  handleMessage = () => {
    fetch('http://127.0.0.1:3030/addlist', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ ...this.state, timestamp: moment().format('X'), uuid: uuid() }),
      mode: 'cors'
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success')
        this.props.dispatch(addMsg(response))
        this.setState({ text: '' })
      })
  }
  render() {
    const actions = [
      <FlatButton label="取消" secondary={true} onClick={this.handleClose} />,
      <FlatButton label="确认" primary={true} disabled={!this.state.isValid} onClick={this.handleEmail} />
    ]
    return (
      <div className="editer">
        <Dialog title="请输入邮箱地址" modal={true} actions={actions} open={this.state.open}>
          <TextField floatingLabelText="email" type={'email'} fullWidth={true} onChange={this.handleChange} />
        </Dialog>
        <Card>
          <CardHeader
            avatar={'https://www.gravatar.com/avatar/' + MD5(this.state.email)}
            title={this.state.email}
            subtitle={this.state.time}
            className="editer-header"
          />
          <CardActions>
            <TextField
              hintText=". . ."
              floatingLabelText="留言消息"
              fullWidth={true}
              onChange={this.handleTextChange}
              value={this.state.text}
            />
            <RaisedButton
              label={this.state.email === '' ? '填写邮箱后留言' : '留言'}
              primary={true}
              onClick={this.handleClick}
            />
          </CardActions>
        </Card>
      </div>
    )
  }
}
const mapSateToProps = (state, props) => {
  return {
    messages: state.messages
  }
}
export default connect(mapSateToProps)(Editer)
