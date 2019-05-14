const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// config
app.use(bodyParser.urlencoded({ extended: true }))

// controllers
const gamesController = require('./controllers/games')
app.use('/games', gamesController)

// routes
app.get('/', (req, res, next) => {
  res.send('Hello World')
})

// set port
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () =>
  console.log('server running on ' + app.get('port'))
)
