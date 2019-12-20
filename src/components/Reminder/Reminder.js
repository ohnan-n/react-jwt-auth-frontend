 import React, { Component } from 'react'
import './Reminder.sass'

class Reminder extends Component {

  state = {

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    let newReminder = {
      info: this.state.info,
      date: this.state.date,
    }

    this.props.addNewReminder(newReminder)
  }
  render() {
    console.log(this.state)
    console.log("on the reminder page")
    console.log(this.props.userReminders)
    // let userReminders = this.props.userReminders.map((userReminder =>{
    //   return  <div key={userReminder._id}>
    //   <h5>{userReminder.info}</h5>
    //   <p>{userReminder.date}</p>
    //   <hr />
      // </div>
    // }))
    return (

    <div>
      <h1>Remember...</h1>
    <div className="col s12 m10 offset-m1 l6 offset-l3"></div> 
        <div className="row">
          <form action="" className="col s12 m8 offset-m2 l6 offset-l3"/>
            </div> 
            <form>
              <div className="input-field">
                <input type="text" name="Reminder" id="Reminder" className="Reminder" onChange={this.handleChange} required/>
                <label htmlFor="Reminder">Enter The Reminder...</label>
                </div>
                <div>
                <input type="date" name="bdate" id="bdate" className="datepicker" onChange={this.handleChange} required/>
                <input type="time" className="timepicker" onChange={this.handleChange}/>
                <input value='Submit' type='submit' onClick={this.props.handleLogIn} />
              </div>
              </form>
              {/* {userReminders} */}
            </div>
    );
  }
}
export default Reminder