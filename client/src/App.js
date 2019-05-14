import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Landing from './views/Landing/Landing'

function App() {
  return (
    <div className="App">
      <h1>Battleship</h1>
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </div>
  )
}

export default App
