import React from 'react'
import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.contentBox}>
        <h1 className={styles.title}>Battleship</h1>
        <div>
          <h3>Welcome</h3>
          <p>Welcome to the game</p>
          <form>
            <label htmlFor="gameNumber">Join a game:</label>
            <input type="text" placeholder="enter game number" />
            <button type="submit">Join</button>
          </form>
          <Link to="/game">Create</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
