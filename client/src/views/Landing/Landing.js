import React from 'react'
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.contentBox}>
        <h1 className={styles.title}>Battleship</h1>
        <div>
          <h3>Welcome</h3>
          <p>Welcome to the game</p>
          <button>Join</button>
          <button>Create</button>
        </div>
      </div>
    </div>
  )
}

export default Landing
