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
      type: Object,
      default: {
        A: [0, 0, 0, 0, 0, -1, -1, -1, -1, -1],
        B: [1, 1, 1, 1, -1, -1, -1, -1, -1, -1],
        C: [2, 2, 2, -1, -1, -1, -1, -1, -1, -1],
        D: [3, 3, 3, -1, -1, -1, -1, -1, -1, -1],
        E: [4, 4, -1, -1, -1, -1, -1, -1, -1, -1],
        F: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        G: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        H: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        I: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        J: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
      }
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
      type: Object,
      default: {
        A: [0, 0, 0, 0, 0, -1, -1, -1, -1, -1],
        B: [1, 1, 1, 1, -1, -1, -1, -1, -1, -1],
        C: [2, 2, 2, -1, -1, -1, -1, -1, -1, -1],
        D: [3, 3, 3, -1, -1, -1, -1, -1, -1, -1],
        E: [4, 4, -1, -1, -1, -1, -1, -1, -1, -1],
        F: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        G: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        H: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        I: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        J: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
      }
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
