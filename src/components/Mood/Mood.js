import React, { Component } from 'react'
import { Button, Icon } from 'react-materialize'
import './Mood.css'

class Mood extends Component {
    state = {
        mood: '',
        
    }
    componentDidMount(){
        
    }

  render() {
    return (
      <div>
          <h3>Choose a Mood</h3>
        <Button
            className="red"
            floating
            icon={<Icon>add</Icon>}
            large
            node="button"
            waves="light"
        />
      </div>
    )
  }
}

export default Mood