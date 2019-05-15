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
        <div className={styles.grid}>{squares}</div>
      </div>
    </div>
  )
}

export default ShotBoard
