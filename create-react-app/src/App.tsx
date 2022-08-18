import './App.css'

import React from 'react'

import { Counter } from './component/Counter'
import Player from './component/player'

const App = () => (
  <div className="App">
    {/* <Player /> */}
    <Counter start={3} />
  </div>
)

export default App
