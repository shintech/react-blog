import React from 'react'
import Navigation from './Navigation.jsx'
import Blog from './Blog.jsx'

class Root extends React.Component {
  render () {
    return (
      <div>
        <Navigation titleProp={this.props.titleProp} />

        <div className='container-fluid'>
          <Blog />
        </div>
      </div>
    )
  }
}

export default Root
