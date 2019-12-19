import React, { Component } from 'react'
import { CardPanel, Row, Col } from 'react-materialize'

import './SignUpForm.css'

class SignUpForm extends Component {
  render() {
    return (
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
      </div>
    )
  }
}

export default SignUpForm
