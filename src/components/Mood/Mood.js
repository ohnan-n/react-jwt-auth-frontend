import React, { Component } from 'react'
import './Mood.css'
import EmojiRating from 'react-emoji-rating'
import { withRouter } from 'react-router-dom'

class Mood extends Component {

  state = {

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    let newMood = {
      mood: this.state.mood,
      sleep: this.state.sleep,
      anxiety: this.state.anxiety
    
    }

    this.props.addNewMood(newMood)
  }

  render() {
    // let userMoods = this.props.userMoods.map((userMood =>{
    //   return  <div key={userMood._id}>
    //     <h5>{userMood.mood}</h5>
    //     <p>{userMood.sleep}</p>
    //     <p>{userMood.anxiety}</p>
    //     <hr />
    //     </div>
    // }))
    console.log(this.props)
    if (this.props.user != null) {
      return (
      <div>
        <form>
        <h4> Whats the vibes, {this.props.user.username}??</h4>
       <div>
        <h5>
        How are you feeling today?
        </h5>
        </div>
        <div className= "moodRating">
        <EmojiRating 
          variant='blobs'
          onChange={this.handleRating} /> 
      </div>
      <div>
        <p>
        How many hours of sleep did you get?
        <input type="number" min="1" max="100"/>
        </p>
      </div>
        <div>
        <p>
        Rate you anxiety level.
        <input type="number" min="1" max="100"/>
        </p>
        </div>
        <input value='Submit' type='submit'/>
        </form>
        {/* {userMoods} */}
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
export default withRouter(Mood)

