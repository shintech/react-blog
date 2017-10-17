import React from 'react'

export default class BlogEntry extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: props.entry.title,
      content: props.entry.content,
      image: props.entry.image,
      created_at: new Date(props.entry.created_at)
    }
  }

  render () {
    return (
      <div className='blog-entry container-fluid'>
        <div className='row'>
          <div className='col-md-9'>
            <h2>{this.state.title}</h2>
            <p><strong>Posted on: </strong><date>{this.state.created_at.toDateString()}</date></p>
            <p>{this.state.content}</p>
          </div>
          <div className='col-md-3'>
            <img className='blog-thumbnail' src={this.state.image} />
          </div>
        </div>
        <hr />
      </div>
    )
  }
}
