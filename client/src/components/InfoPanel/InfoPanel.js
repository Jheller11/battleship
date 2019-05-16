import React from 'react'
import styles from './InfoPanel.module.css'

const InfoPanel = props => {
  console.log(props)
  return (
    <div>
      <div>{props.data.player1.name}</div>
      <div>Ships Remaining: {props.data.player1.ships.join(', ')}</div>
      <div>Turn: {props.data.player1.turn ? 'Yes' : 'No'}</div>
      <div>{props.data.player2.name}</div>
      <div>Ships Remaining: {props.data.player2.ships.join(', ')}</div>
      <div>Turn: {props.data.player2.turn ? 'Yes' : 'No'}</div>
    </div>
  )
}

export default InfoPanel
