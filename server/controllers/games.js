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
