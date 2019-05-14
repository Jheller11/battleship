const mongoose = require('../db/connection')

const gameSchema = new mongoose.Schema({
  player1: {
    name: {
      type: String,
      default: 'player1'
    },
    ships: {
      type: Array,
      default: [
        'carrier',
        'battleship',
        'submarine',
        'destroyer',
        'patrol boat'
      ]
    },
    turn: {
      type: Boolean,
      required: true,
      default: true
    },
    shots: {
      type: Array,
      default: []
    },
    shipSetup: {
      type: Array,
      default: []
    }
  },
  player2: {
    name: {
      type: String,
      default: 'player2'
    },
    ships: {
      type: Array,
      default: [
        'carrier',
        'battleship',
        'submarine',
        'destroyer',
        'patrol boat'
      ]
    },
    turn: {
      type: Boolean,
      required: true,
      default: false
    },
    shots: {
      type: Array,
      default: []
    },
    shipSetup: {
      type: Array,
      default: []
    }
  }
})

module.exports = mongoose.model('Game', gameSchema)

// player1: {
//     name: 'player1',
//     ships: ['car', 'bat', 'sub', 'des', 'pat'],
//     turn: true,
//     shots: [],
//     shipSetup: []
//   },
//   player2: {
//     name: 'player2',
//     ships: ['car', 'bat', 'sub', 'des', 'pat'],
//     turn: false,
//     shots: [],
//     shipSetup: []
//   }
