import React from 'react'
import faker from 'faker'
import {capitalizedFirstLetter} from '../../utilities'

export default class Home extends React.Component {
  render () {
    return (
      <main>
        <h1>{capitalizedFirstLetter(faker.fake('{{lorem.word}}'))}</h1>
        <div className='row'>
          <img className='col-md-4' src='images/ninja.jpg' />
          <article className='col-md-8'>
            <h3>{faker.fake('{{lorem.sentence}}')}</h3>
            <p>{faker.fake('{{lorem.paragraphs}}')}</p>
            <h3>{faker.fake('{{lorem.sentence}}')}</h3>
            <p>{faker.fake('{{lorem.paragraphs}}')}</p>
            <h3>{faker.fake('{{lorem.sentence}}')}</h3>
            <p>{faker.fake('{{lorem.paragraphs}}')}</p>
            <h3>{faker.fake('{{lorem.sentence}}')}</h3>
            <p>{faker.fake('{{lorem.paragraphs}}')}</p>
          </article>
        </div>
      </main>
    )
  }
}
