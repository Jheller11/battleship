import React from 'react'
import styles from './PlayerSquare.module.css'

const Square = props => {
  switch (props.data) {
    case 'h':
      return <div className={styles.hitSquare} />
    case 'm':
      return <div className={styles.missSquare} />
    default:
      return <div className={styles.blankSquare} />
  }
}

export default Square

// This component will receive data whether unknown, shot missed, shot hit
// and render appropriate symbol/styling
