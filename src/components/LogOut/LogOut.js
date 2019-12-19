import React, { Component } from 'react'
import { CardPanel, Row, Col } from 'react-materialize'

import './LogOut.css'

class LogOut extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col m={6} s={12}>
            <CardPanel className="cyan lighten-5" >
              <h2 className="logout" >See Ya!</h2>

              <form>
                <input value='Log Out' type='submit' onClick={this.props.handleLogOut} />
              </form>
            </CardPanel>
          </Col>
        </Row>
      </div>
    )
  }
}

export default LogOut
