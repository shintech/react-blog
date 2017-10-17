import React from 'react'

class Navigation extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-custom'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <a className='navbar-brand' href='#/home'><svg className='logo' /></a>
          </div>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav'>
              <li className='nav-item'><a className='nav-link' href='#/home'>Home</a></li>
              <li className='nav-item'><a className='nav-link' href='#/blog'>Blog</a></li>
              <li className='nav-item'><a className='nav-link' href='#/services'>Services</a></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='#'><span className='glyphicon glyphicon-user' /> Sign Up</a></li>
              <li><a href='#'><span className='glyphicon glyphicon-log-in' /> Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
