import React, { Component } from 'react'
import ReactCalendar from 'react-calendar'
import './Calendar.scss'

class Calendar extends Component {

  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <div className="calendar-rectangle">
          <div id="calendar-content" className="calendar-content"></div>
        </div>
        {/* <ReactCalendar
          onChange={this.onChange}
          value={this.state.date}
        /> */}
      </div>
    );
  }
}
export default Calendar