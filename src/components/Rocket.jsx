import React, { Suspense } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

const Rocket = ({ rocket }) => {
  const {
    id,
    name,
    active,
    boosters,
    company,
    country,
    type,
    wikipedia
  } = rocket

  return (
    <Suspense fallBack={<h1>...Loading Rockets</h1>}>
      <div>
        <h1>{name}</h1>
        <p>Active: {active}</p>
        <p>Boosters: {boosters}</p>
        <p>Company: {company}</p>
        <p>Country: {country}</p>
        <p>Type: {type}</p>
        <p>
          Wikipedia: <a href={wikipedia}>{name}</a>
        </p>
      </div>
    </Suspense>
  )
}

export default createFragmentContainer(Rocket, {
  rocket: graphql`
    fragment Rocket_rocket on Rocket {
      id
      name
      active
      boosters
      company
      country
      type
      wikipedia
    }
  `
})
