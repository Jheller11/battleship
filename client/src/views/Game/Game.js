import React, { Component } from 'react'

import PlayerBoard from '../../components/PlayerBoard/PlayerBoard'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inGame: true,
      game: null,
      gameID: this.props.match.params.id || 0
    }
  }

  componentDidMount() {
    // establish connection to socket based on url
    console.log(this.props.match)
  }

  render() {
    return (
      <div>
        <PlayerBoard board={['hit', 'miss', 'unknown']} />
        {/* <OpponentBoard /> */}
        {/* <Chat /> */}
        {/* <ShipDisplay /> */}
        {/* <ShootingForm /> */}
      </div>
    )
  }
}

export default Game
