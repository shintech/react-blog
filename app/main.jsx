import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx'
import Blog from './components/Blog.jsx'
import Services from './components/Services.jsx'
import Navigation from './components/Navigation.jsx'

global.jQuery = require('jquery')
require('bootstrap')
require('./public/css/style.scss')

ReactDOM.render(<Navigation titleProp='REACT' />, document.getElementById('navigation'))

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/services' component={Services} />
    </Switch>
  </Router>
), document.getElementById('main'))
