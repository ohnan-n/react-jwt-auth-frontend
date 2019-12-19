import React, { Component } from 'react'
import './Profile.css'
import { withRouter } from 'react-router-dom'



class Profile extends Component {

  sendToJournal = e => {
    e.preventDefault()
    const location = {
      pathname: '/journal'
    }
    this.props.history.push(location)
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
  
          <h4> Welcome, {this.props.user.username} </h4>
          <div>
          <button onClick={e => {this.sendToJournal(e)}}><i className="large material-icons">book</i></button>
          <button onClick={e => {this.sendToCalendar(e)}}><i className="large material-icons">event_note</i></button>
          <button onClick={e => {this.sendToMood(e)}}> <i className="large material-icons">mood</i></button>
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

export default withRouter(Profile)
