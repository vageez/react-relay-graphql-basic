import React, { Suspense } from 'react'
import History from './History.jsx'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../../lib/relayEnv.js'

const HistoriesResult = () => (
    <>
    <QueryRenderer
      environment={environment}
      query={graphql`
        query HistoriesResultsQuery {
            historiesResult{
                result {
                    totalCount
                }
                data {
                    ...History_history
                }
            }
        }
      `}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
            return props.historiesResult.data.map(
                    history => <History key={history.__id} history={history} />
            )
        }
        return <div>Loading</div>
      }}
    />
  </>
)

export default HistoriesResult
