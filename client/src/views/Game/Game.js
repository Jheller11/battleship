import React, { Component } from 'react'
import axios from 'axios'

import PlayerBoard from '../../components/PlayerBoard/PlayerBoard'
import ShotBoard from '../../components/ShotBoard/ShotBoard'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inGame: true,
      game: null,
      gameID: this.props.match.params.id,
      player1: true
    }
  }

  componentDidMount() {
    // establish connection to socket based on url
    if (this.state.gameID) {
      axios
        .get('http://localhost:4000/games/' + this.state.gameID)
        .then(res => this.setState({ game: res.data[0] }))
        .catch(err => console.log(err))
    } else {
      alert('no game detected')
    }
  }

  render() {
    if (this.state.game) {
      return (
        <div>
          <PlayerBoard board={this.state.game.player1.shipSetup} />
          <ShotBoard
            shots={[
              { square: 0, hit: true },
              { square: 11, hit: true },
              { square: 99, hit: false }
            ]}
          />
          {/* <Chat /> */}
          {/* <ShootingForm /> */}
          {/* <Info Panel /> */}
        </div>
      )
    } else {
      return <div>no game</div>
    }
  }
}

export default Game
