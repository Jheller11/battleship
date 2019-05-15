const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// controllers
const gamesController = require('./controllers/games')
app.use('/games', gamesController)

// routes
app.get('/', (req, res, next) => {
  res.send('Hello World')
})

// custom error handler
app.use((err, req, res, next) => {
  if (err) {
    console.log(err)
    res.json({ error: err })
  }
})

// set port
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () =>
  console.log('server running on ' + app.get('port'))
)
