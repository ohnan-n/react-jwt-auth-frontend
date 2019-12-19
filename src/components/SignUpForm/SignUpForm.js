import React, { Component } from 'react'
import { CardPanel, Row, Col } from 'react-materialize'

import './SignUpForm.css'

class SignUpForm extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Row>
          <Col m={6} s={12}>
            <CardPanel className="cyan lighten-5" >
              <h2>Sign Up</h2>
              <form>
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='text' name='email' onChange={this.props.handleInput} />
                </div>

                <div>
                  <label htmlFor='password'>Password</label>
                  <input type='text' name='password' onChange={this.props.handleInput} />
                </div>
                <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
              </form>
            </CardPanel>
          </Col>
        </Row>
=======
      <div className="register">
        <h1>Sign Up</h1>

        <form>
        <div className="userName">
            <label >Username</label>
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
>>>>>>> 48c5aad302b2b9022a700a3e612a5063b034b7a2
      </div>
    )
  }
}

export default SignUpForm
