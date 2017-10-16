import React from 'react'
import Root from './components/Root.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      header: 'Default'
    }
  }

  render () {
    return (
      <div>
        <Root titleProp={this.state.header} />
      </div>
    )
  }
}

export default App
