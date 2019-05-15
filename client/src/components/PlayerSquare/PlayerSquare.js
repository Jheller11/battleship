import React from 'react'
import styles from './PlayerSquare.module.css'

const PlayerSquare = props => {
  if (props.data < 0) {
    return <div className={styles.blankSquare} />
  } else {
    return <div className={styles.hitSquare}>1</div>
  }
}

export default PlayerSquare

// This component will receive data whether unknown, shot missed, shot hit
// and render appropriate symbol/styling
