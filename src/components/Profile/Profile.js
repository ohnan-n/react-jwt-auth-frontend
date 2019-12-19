import React, { Component } from 'react'
<<<<<<< HEAD
// import './Profile.css'
=======
import './Profile.css'
import { withRouter } from 'react-router-dom'

>>>>>>> 48c5aad302b2b9022a700a3e612a5063b034b7a2


class Profile extends Component {

  sendToJournal = e => {
    e.preventDefault()
    const location = {
      pathname: '/journal'
    }
    this.props.history.replace(location)
  }
  sendToMood= e => {
    e.preventDefault()
    const location = {
      pathname: '/mood'
    }
    this.props.history.replace(location)
  }
  sendToCalendar= e => {
    e.preventDefault()
    const location = {
      pathname: '/calendar'
    }
    this.props.history.replace(location)
  }
  render() {
    console.log(this.props)
    if (this.props.user != null) {
      return (
        <div>
<<<<<<< HEAD
          <h4>{this.props.user.email}</h4>
          <h4>What up</h4>

=======
  
          <h4> Welcome, {this.props.user.username} </h4>
          <div>
          <button onClick={e => {this.sendToJournal(e)}}><i className="large material-icons">book</i></button>
          <button onClick={e => {this.sendToCalendar(e)}}><i className="large material-icons">event_note</i></button>
          <button onClick={e => {this.sendToMood(e)}}> <i className="large material-icons">mood</i></button>
          </div>
>>>>>>> 48c5aad302b2b9022a700a3e612a5063b034b7a2
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

export default withRouter(Profile)
