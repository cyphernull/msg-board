const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PouchDB = require('pouchdb')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.post('/db', (req, res) => {
  console.log(req.body)
  res.send('hi')
})

const port = 3030
const server = app.listen(port, function() {
  console.log('Listening at', port)
})

const db = new PouchDB('http://localhost:5984/msg', {
  auth: {
    username: 'root',
    password: '112358'
  }
})
db.info().then(
  function(info) {
    console.log(info)
  },
  err => {
    console.log(err)
  }
)
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
