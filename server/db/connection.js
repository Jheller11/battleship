const mongoose = require('mongoose')
mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/battleship', { useNewUrlParser: true })

module.exports = mongoose
