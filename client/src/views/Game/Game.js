import React, { Component } from 'react'
import axios from 'axios'

import PlayerBoard from '../../components/PlayerBoard/PlayerBoard'
import ShotBoard from '../../components/ShotBoard/ShotBoard'
import InfoPanel from '../../components/InfoPanel/InfoPanel'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      inGame: true,
      game: undefined,
      gameID: this.props.match.params.id,
      player1: true
    }
  }

  componentDidMount() {
    // establish connection to socket based on url
    if (this.state.gameID) {
      axios
        .get('http://localhost:4000/games/' + this.state.gameID)
        .then(res => this.setState({ game: res.data[0], loading: false }))
        .catch(err => console.log(err))
    } else {
      alert('no game detected')
    }
  }

  render() {
    if (this.state.game) {
      return (
        <div>
          <h1>Player 1</h1>
          <PlayerBoard board={this.state.game.player1.shipSetup} />
          <ShotBoard
            shots={[
              { square: 0, hit: true },
              { square: 11, hit: true },
              { square: 99, hit: false }
            ]}
          />
          {!this.state.loading ? <InfoPanel data={this.state.game} /> : null}
          {/* <Chat /> */}
          {/* <ShootingForm /> */}
          <h1>Player 2</h1>
          <PlayerBoard board={this.state.game.player2.shipSetup} />
          <ShotBoard
            shots={[
              { square: 0, hit: true },
              { square: 11, hit: true },
              { square: 99, hit: false }
            ]}
          />
        </div>
      )
    } else {
      return <div>no game</div>
    }
  }
}

export default Game
