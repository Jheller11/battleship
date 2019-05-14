import React from 'react'
import styles from './Board.module.css'

import Square from '../Square/Square'

const Board = props => {
  return (
    <div>
      {this.props.board.map(square => {
        return <Square data={square} />
      })}
    </div>
  )
}

export default Board

// This component will receive as data the current board and pass
// each square data to a square component to render each box
