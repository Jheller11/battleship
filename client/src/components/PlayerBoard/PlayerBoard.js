import React from 'react'
import styles from './PlayerBoard.module.css'

import Squares from '../Squares/Squares'

const PlayerBoard = props => {
  return (
    <div>
      <h1>Player Ship Arrangement</h1>
      <div className={styles.grid}>
        {props.board.map((square, i) => {
          return <Squares.PlayerSquare key={i} data={square} />
        })}
      </div>
    </div>
  )
}

export default PlayerBoard

// This component will receive as data the current board and pass
// each square data to a square component to render each box
