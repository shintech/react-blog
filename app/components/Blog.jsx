import React from 'react'
import BlogEntry from './BlogEntry.jsx'

export default class Blog extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      entries: []
    }
  }

  componentDidMount () {
    return fetch('/api/entries') //eslint-disable-line
    .then(response => response.json())
    .then(json => {
      this.setState({ entries: json })
    })
  }

  render () {
    return (
      <div>
        {this.state.entries.map(entry =>
          <BlogEntry key={entry.id} entry={entry} />
        )}
      </div>
    )
  }
}
