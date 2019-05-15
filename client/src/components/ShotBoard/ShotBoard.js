import React from 'react'
import styles from './ShotBoard.module.css'
import Squares from '../Squares/Squares'

const ShotBoard = props => {
  console.log(props)
  let squares = []
  for (let i = 0; i < 100; i++) {
    squares.push(<Squares.ShotBoardSquare key={i} />)
  }
  props.shots.forEach(shot => {
    squares[shot.square] = (
      <Squares.ShotBoardSquare key={shot.square} data={shot.hit} />
    )
  })
  return (
    <div>
      <h1>Shot Board</h1>
      <div className={styles.grid}>{squares}</div>
    </div>
  )
}

export default ShotBoard
