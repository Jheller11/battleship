const router = require('express').Router
const Game = require('../models/Game')

router.get('/:id', (req, res, next) => {
  Game.find({ _id: req.params.id })
    .then(game => {
      res.json(game).status(200)
    })
    .catch(err => next(err))
})

router.post('/new', (req, res, next) => {
  Game.create({})
    .then(game => {
      res.json(game.status(200))
    })
    .catch(err => next(err))
})

module.exports = router

// one => create game -> if no player setup then show screen for setting up ships (with timer)
// two => post game setup to db
// three => when both players are ready -> commence game with player1

// shots
// shooting player enters letter/number combo in form
// update db/ return updated game/ alert hit or miss or sunk
