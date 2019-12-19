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
      data: this.state.date
    }

    this.props.addNewJournal(newJournal)
  }

  render() {
    console.log(this.state)
    console.log("on the journal page")
    console.log(this.props.userJournals)
    let userJournals = this.props.userJournals.map((userJournal =>{
      return  <div key={userJournal._id} >{userJournal.entry} </div>
    }))
    return (
      <div>
        <h1>Vent</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input type='text' name='title' onChange={this.handleChange}/>
          </div>
          <div>
            <label>Enter Text Here</label>
            <input type='text' name='entry' onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <input
              type='date'
              placeholder='Date'
              name='date'
              className='form-control'
                    // value={this.state.date}
                    // onChange={this.onChange}
                    onChange={this.handleChange}
                  />
                </div>
          <input value='Submit' type='submit' />
        </form>
        {userJournals}
        </div>
    )
  }
}

export default Journal