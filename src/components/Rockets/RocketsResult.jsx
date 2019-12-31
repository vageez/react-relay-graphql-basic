import React from 'react'
import { usePreloadedQuery } from 'react-relay/hooks';
import { AppRocketsResultQuery } from '../../app.js'

const RocketsResult = props => {
    const data = usePreloadedQuery(AppRocketsResultQuery, props.preloadedQuery);
    console.log(data)
    const { 
        rocketsResult : {
            result,
            data: rockets
        }
    } = data
    return (
      <div>
        <p>Total Rockets: {result.totalCount}</p>
        {rockets.map(rocket => <div key={rocket.id}><pre>{JSON.stringify(rocket, undefined, 2)}</pre></div>)}
      </div>
    );
  }

export default RocketsResult