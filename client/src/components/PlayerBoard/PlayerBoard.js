import React from 'react'
import styles from './PlayerBoard.module.css'

import PlayerSquare from '../PlayerSquare/PlayerSquare'

const PlayerBoard = props => {
  let keys = Object.keys(props.board)
  let squares = []
  keys.forEach(key => {
    props.board[key].map((square, i) => {
      squares.push(<PlayerSquare key={i + key} data={square} />)
    })
  })

  return <div className={styles.grid}>{squares}</div>
}

export default PlayerBoard

// This component will receive as data the current board and pass
// each square data to a square component to render each box
