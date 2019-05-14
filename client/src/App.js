import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Landing from './views/Landing/Landing'
import Game from './views/Game/Game'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <Landing />} />
        <Route path="/game" exact render={props => <Game {...props} />} />
      </Switch>
    </div>
  )
}

export default App
