import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

global.jQuery = require('jquery')
require('bootstrap')
require('./public/css/style.scss')

ReactDOM.render(<App />, document.getElementById('main'))
