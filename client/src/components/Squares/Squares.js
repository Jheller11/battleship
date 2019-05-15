import React from 'react'
import styles from './Squares.module.css'

const PlayerSquare = props => {
  if (props.data < 0) {
    return <div className={styles.blankSquare} />
  } else {
    return <div className={styles.shipSquare}>{props.data}</div>
  }
}

const ShotBoardSquare = props => {
  if (props.data === undefined) {
    return <div className={styles.blankSquare} />
  } else if (!props.data) {
    return <div className={styles.missSquare} />
  } else {
    return <div className={styles.hitSquare} />
  }
}

export default {
  PlayerSquare,
  ShotBoardSquare
}

// This component will receive data whether unknown, shot missed, shot hit
// and render appropriate symbol/styling
