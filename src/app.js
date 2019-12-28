import React from 'react'
import ReactDOM from 'react-dom'
import Rockets from './components/Rockets.jsx'

const App = () => (
  <>
    <h1>SpaceX React Relay GraphQL</h1>
    <Rockets />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
