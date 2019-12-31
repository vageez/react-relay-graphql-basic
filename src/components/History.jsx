import React, { Suspense } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

const History = ({ history }) => {
  const {
        details,
        flight
  } = history

  return (
    <Suspense fallBack={<h1>...Loading History</h1>}>
        <div>
            <h1>{details}</h1>
            <p>{flight && flight.flightDetails ? history.flight.flightDetails : 'No flight details...'}</p>
        </div>
    </Suspense>
  )
}

export default createFragmentContainer(History, {
  history: graphql`
    fragment History_history on History {
      details
      flight {
        flightDetails: details
      }
    }
  `
})