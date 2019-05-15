import React from 'react'
import styles from './PlayerBoard.module.css'

import Squares from '../Squares/Squares'

const PlayerBoard = props => {
  let keys = Object.keys(props.board)
  let squares = []
  keys.forEach(key => {
    props.board[key].map((square, i) => {
      squares.push(<Squares.PlayerSquare key={i + key} data={square} />)
    })
  })

  return (
    <div>
      <h1>Player Ship Arrangement</h1>
      <div className={styles.grid}>{squares}</div>
    </div>
  )
}

export default PlayerBoard

// This component will receive as data the current board and pass
// each square data to a square component to render each box
