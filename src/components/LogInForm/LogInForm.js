import React, { Component } from 'react'
import { CardPanel, Row, Col } from 'react-materialize'
import './LogInForm.css'

class LogInForm extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Row>
          <Col m={6} s={12}>
            <CardPanel className="cyan lighten-5" >
              <h2 className="login">Login</h2>
              <form>
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='text' name='email' onChange={this.props.handleInput} />
                </div>
                <div>
                  <label htmlFor='password'>Password</label>
                  <input type='text' name='password' onChange={this.props.handleInput} />
                </div>
                <input value='Submit' type='submit' onClick={this.props.handleLogIn} />
              </form>
            </CardPanel>
          </Col>
        </Row>
=======
        <h1>Login</h1>

        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleLogIn} />
        </form>
>>>>>>> 48c5aad302b2b9022a700a3e612a5063b034b7a2
      </div>
    )
  }
}

export default LogInForm
