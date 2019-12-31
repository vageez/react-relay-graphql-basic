import React from 'react'
import Rocket from './Rocket.jsx'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../../lib/relayEnv.js'

const Rockets = () => (
  <>
    <QueryRenderer
      environment={environment}
      query={graphql`
        query RocketsQuery {
          rockets {
            ...Rocket_rocket
          }
        }
      `}
      // variables={{ }}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return props.rockets.map(
            rocket => <Rocket key={rocket.__id} rocket={rocket} />
          )
        }
        return <div>Loading</div>
      }}
    />
  </>
)

export default Rockets
