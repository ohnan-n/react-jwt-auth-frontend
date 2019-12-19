import React, { Component } from 'react'

import './SignUpForm.css'

class SignUpForm extends Component {
  render () {
    return (
      <div className="register">
        <h1>Sign Up</h1>

        <form>
        <div className="userName">
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' onChange={this.props.handleInput} />
          </div>
          <div className="regEmail">
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div className="regPass">
            <label htmlFor='password'>Password</label>
            <input id="passInput" type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form>
      </div>
    )
  }
}

export default SignUpForm
