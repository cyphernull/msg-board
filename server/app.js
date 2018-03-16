const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PouchDB = require('pouchdb')
const moment = require('moment')
const https = require('https')
const fs = require('fs')
const path = require('path')
const options = {
  key: fs.readFileSync(path.resolve('./server/localhost.key')),
  cert: fs.readFileSync(path.resolve('./server/localhost.cert'))
}
const app = express()
const port = 3030
const server = https.createServer(options, app)
server.listen(port, function() {
  console.log('Express server listening on port ' + server.address().port)
})
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const db = new PouchDB('http://139.199.188.225:5984/msg')
const doc = {
  _id: 'messages',
  messages: []
}

db.put(doc).then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
const comment = {
  _id: 'comment',
  comments: []
}
db.put(comment).then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
db.info().then(
  function(info) {
    console.log(info)
  },
  err => {
    console.log(err)
  }
)

app.post('/addlist', (req, res) => {
  const data = req.body
  db
    .get('messages')
    .then(function(doc) {
      doc.messages.push({
        time: data.time,
        email: data.email,
        text: data.text,
        timestamp: data.timestamp,
        uuid: data.uuid
      })
      db.put(doc)
    })
    .then(function(response) {
      // handle response
    })
    .catch(function(err) {
      console.log(err)
    })
  res.send(data)
})

app.post('/addcomment', (req, res) => {
  const data = req.body
  console.log(data)
  db
    .get('comment')
    .then(function(doc) {
      console.log(doc.comments)
      doc.comments.push({
        time: data.time,
        from: data.from,
        to: data.to,
        text: data.text,
        timestamp: data.timestamp,
        uuid: data.uuid
      })
      db.put(doc)
    })
    .then(function(response) {
      // handle response
    })
    .catch(function(err) {
      console.log(err)
    })
  res.send(data)
})

app.get('/getlist', (req, resp) => {
  console.log(req.body)
  db
    .get('messages')
    .then(function(doc) {
      console.log(doc)
      resp.send(doc.messages)
    })
    .catch(function(err) {
      console.log(err)
    })
})

app.get('/getcomments', (req, resp) => {
  console.log(req.body)
  db
    .get('comment')
    .then(function(doc) {
      console.log(doc)
      resp.send(doc.comments)
    })
    .catch(function(err) {
      console.log(err)
    })
})

// const server = app.listen(port, function() {
//   console.log('Listening at', port)
// })

// const doc = {
//   _id: 'mittens',
//   name: 'Mittens',
//   occupation: 'kitten',
//   age: 3,
//   hobbies: ['playing with balls of yarn', 'chasing laser pointers', "lookin' hella cute"]
// }
// db.put(doc)
// db.get('msg').then(
//   function(doc) {
//     console.log(doc)
//   },
//   err => {
//     console.log(err)
//   }
// )
