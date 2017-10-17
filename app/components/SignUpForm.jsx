import React from 'react'

export default class SignUpForm extends React.Component {
  render () {
    return (
      <form>

        <div class='form-group'>
          <label for='username' class='control-label'>Username</label>
          <input class='form-control' type='text' id='name_input' name='username' placeholder='Enter username...' />
          <span class='help-block hidden' />
        </div>
        <div class='form-group'>
          <label for='password' class='control-label'>Password</label>
          <input class='form-control' type='password' id='name_input' name='password' placeholder='Enter password...' />
          <span class='help-block hidden' />
        </div>

        <button className='btn btn-primary' id='submit'>Submit</button>
      </form>
    )
  }
}
