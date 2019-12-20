import React, { Component } from 'react'
import './Journal.css'

class Journal extends Component {

  state = {

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    let newJournal = {
      title: this.state.title,
      entry: this.state.entry,
      date: this.state.date
    
    }

    this.props.addNewJournal(newJournal)
  }

  render() {
    let userJournals = this.props.userJournals.map((userJournal =>{
      return  <div key={userJournal._id}>
        <h5>{userJournal.date}</h5>
        <p>{userJournal.title}</p>
        <p>{userJournal.entry}</p>
        <hr />
        </div>
    }))
    return (
      <div>
        <h1>Vent</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input type='text' name='title' onChange={this.handleChange} required/>
          </div>
          <div>
            <label>Enter Text Here</label>
            <input type='text' name='entry' onChange={this.handleChange} required/>
          </div>
          <div>
            <label>Date</label>
            <input type='date' name='date' onChange={this.handleChange} required/>
          </div>
          <input value='Submit' type='submit'/>
        </form>
        {userJournals}
        </div>
    )
  }
}

export default Journal