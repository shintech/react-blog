import React from 'react'
import faker from 'faker'

export default class Services extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <h3>{faker.fake('{{hacker.ingverb}}')}</h3>
            <p>{faker.fake('{{hacker.phrase}}')}</p>
          </li>
          <li>
            <h3>{faker.fake('{{hacker.ingverb}}')}</h3>
            <p>{faker.fake('{{hacker.phrase}}')}</p>
          </li>
          <li>
            <h3>{faker.fake('{{hacker.ingverb}}')}</h3>
            <p>{faker.fake('{{hacker.phrase}}')}</p>
          </li>
          <li>
            <h3>{faker.fake('{{hacker.ingverb}}')}</h3>
            <p>{faker.fake('{{hacker.phrase}}')}</p>
          </li>
          <li>
            <h3>{faker.fake('{{hacker.ingverb}}')}</h3>
            <p>{faker.fake('{{hacker.phrase}}')}</p>
          </li>
        </ul>
      </div>
    )
  }
}
