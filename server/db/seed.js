const Game = require('../models/Game')
const seeds = require('./seeds.json')
const mongoose = require('./connection')

Game.deleteMany({})
  .then(Game.insertMany(seeds))
  .then(() => {
    mongoose.connection.close()
    console.log(`Successfully added ${seeds.length} items.`)
  })
  .catch(err => console.log(err))

//   5cdc1631f7de5e699d77b00f
