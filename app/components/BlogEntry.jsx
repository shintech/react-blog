import React from 'react'

export default class BlogEntry extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      entry: props.entry,
      image: props.entry.image
    }
  }

  render () {
    return (
      <div>
        <h1>{this.state.entry.title}</h1>
        <p>{this.state.entry.content}</p>
        <img className='blog-thumbnail' src={this.state.image} />
        <date>{this.state.entry.created_at}</date>
      </div>
    )
  }
}
