import React from 'react'
import styles from './PlayerBoard.module.css'

import Squares from '../Squares/Squares'

const PlayerBoard = props => {
  return (
    <div>
      <h1>Player Ship Arrangement</h1>
      <div className={styles.numberLine}>
        <span />
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <div className={styles.flex}>
        <div className={styles.letterColumn}>
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
          <span>E</span>
          <span>F</span>
          <span>G</span>
          <span>H</span>
          <span>I</span>
          <span>J</span>
        </div>
        <div className={styles.grid}>
          {props.board.map((square, i) => {
            return <Squares.PlayerSquare key={i} data={square} />
          })}
        </div>
      </div>
    </div>
  )
}

export default PlayerBoard

// This component will receive as data the current board and pass
// each square data to a square component to render each box
