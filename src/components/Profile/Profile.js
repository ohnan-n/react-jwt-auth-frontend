import React, { Component } from 'react'
import './Profile.css'

class Profile extends Component {
  
  render() {
    console.log(this.props)
    if (this.props.user != null) {
      return (
        <div>
  
          <h4> Welcome, {this.props.user.username} </h4>
          <div>
          <button><i class="large material-icons">book</i></button>
          <button><i class="large material-icons">event_note</i></button>
         <button> <i class="large material-icons">mood</i></button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }

}

export default Profile
