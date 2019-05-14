import React from 'react'
import styles from './PlayerBoard.module.css'

import PlayerSquare from '../PlayerSquare/PlayerSquare'

const Board = props => {
  console.log(props)
  return (
    <div>
      {props.board.map(square => {
        return <PlayerSquare data={square} />
      })}
    </div>
  )
}

export default Board

// This component will receive as data the current board and pass
// each square data to a square component to render each box
