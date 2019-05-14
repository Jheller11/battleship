import React, { Component } from 'react'

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
    return <div>I am the game content</div>
  }
}

export default Game
