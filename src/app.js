import React, { Suspense, useState, useTransition } from 'react'
import ReactDOM from 'react-dom'
import { taggedSum } from 'daggy'
/// Experimental
import {
  RelayEnvironmentProvider,
  preloadQuery,
  graphql,
} from 'react-relay/hooks'
import RelayEnvironment from './RelayEnvironment'
/// Experimental
import RocketsResult from './components/Rockets/RocketsResult.jsx'

const Pages = taggedSum('Pages', {
  HOME: [],
  ROCKETS: [],
  HISTORY: [],
})

export const AppRocketsResultQuery = graphql`
  query appQuery($limit: Int!, $offset: Int!) {
    rocketsResult(limit: $limit, offset: $offset) {
      result {
        totalCount
      }
      data {
        id
        name
        active
        boosters
        company
        country
        type
        wikipedia
      }
    }
  }
`
export const preloadedQuery = preloadQuery(
  RelayEnvironment,
  AppRocketsResultQuery,
  { limit: 2, offset: 0 },
)

const App = () => {
  const [resource, setResource] = useState(Pages.HOME)
  const [startTransition, isPending] = useTransition({
    timeoutMs: 100,
  })
  return (
    <>
      <nav>
        <button
          onClick={() => {
            startTransition(() => setResource(Pages.ROCKETS))
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
          History
        </button>
      </nav>
      {isPending && 'Is Pending...'}
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={'Loading...'}>
          {resource.cata({
            HOME: () => <div>Home</div>,
            ROCKETS: () => <RocketsResult preloadedQuery={preloadedQuery} />,
            HISTORY: () => <div>Histories</div>,
          })}
        </Suspense>
      </RelayEnvironmentProvider>
    </>
  )
}

const rootElement = document.getElementById('root')
// Opt into Concurrent Mode
ReactDOM.createRoot(rootElement).render(<App />)
