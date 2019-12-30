import React, { useState, useTransition, Suspense } from 'react'
import ReactDOM from 'react-dom'
import Rockets from './components/Rockets.jsx'
import Histories from './components/HistoriesResults.jsx'
import { taggedSum } from 'daggy'

const Pages = taggedSum('Pages', {
  HOME: [],
  ROCKETS: [],
  HISTORY: [],
})

const initialState = Pages.HOME

const App = () => {
  const [resource, setResource] = useState(initialState)
  const [startTransition, isPending] = useTransition({
    timeoutMs: 100,
  })
  return (
    <>
      {/* {resource.cata({
        HOME: () => <h1>SpaceX React Relay GraphQL</h1>,
        ROCKETS: () => <h1>SpaceX Rockets React Relay GraphQL</h1>,
        HISTORY: () => <h1>SpaceX Histories React Relay GraphQL</h1>,
      })} */}
      {isPending ? " isPending..." : null}
      <nav>
        <button
          onClick={() => {
            startTransition(() => {
              setResource(Pages.ROCKETS)
            })
          }}
        >
          Rockets
        </button>
        <button
          onClick={() => {
            startTransition(() => {
              setResource(Pages.HISTORY)
            })
          }}
        >
          Concurrent History
        </button>

        <button onClick={() => setResource(Pages.HISTORY)}>History</button>
      </nav>

      {resource.cata({
        HOME: () => 'Home',
        ROCKETS: () => <Rockets />,
        HISTORY: () =>   <Suspense fallback={<h3>...Histories</h3>}><Histories /></Suspense>,
      })}
    </>
  )
}

const rootElement = document.getElementById('root')
// Opt into Concurrent Mode
ReactDOM.createRoot(rootElement).render(<App />)
