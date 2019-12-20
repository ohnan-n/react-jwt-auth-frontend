import React, { Component } from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import LogOut from '../LogOut/LogOut'
import Profile from '../Profile/Profile'
import Journal from '../Journal/Journal'
import Reminder from '../Reminder/Reminder'
import Mood from '../Mood/Mood'
import './App.css'

const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'

class App extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    isLoggedIn: false,
    user: null,
    userJournals: []
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
        user: JSON.parse(localStorage.user)
      })
      this.getJournal()
    } else {
      this.setState({
        isLoggedIn: false
      })
    }

  }

  addNewJournal = (journal) => {
  
    console.log('ADD NEW JOURNAL', journal)
    let user = JSON.parse(window.localStorage.user)
    journal.user = user._id

    axios({
      url: `${databaseUrl}/api/journals`,
      method: 'POST',
      data: journal
    })
    .then(response => { 
      console.log('ADD NEW JOURNAL RES', response)
      this.getJournal()
    })
    .catch(error => {
      console.log(error.response)
    })
  }

  getJournal = () => {
    console.log('getJournal')
    axios({
      url: `${databaseUrl}/api/journals/${JSON.parse(localStorage.user)._id}`,
      method: 'GET'
    })
    .then(userJournals => {
      console.log('getJournal RES', userJournals);
      this.setState({ userJournals: userJournals.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  addNewReminder = (reminder) => {

    console.log('ADD NEW REMINDERS', reminder)
    let user = JSON.parse(window.localStorage.user)
    reminder.user = user._id

    axios({
      url: `${databaseUrl}/api/reminders`,
      method: 'POST',
      data: reminder
    })
    .then(response => { 
      console.log('ADD NEW REMINDERS', reminder)
      this.getReminder()
    })
    .catch(error => {
      console.log(error.response)
    })
  }

  getReminder = () => {
    console.log('getReminder')
    axios({
      url: `${databaseUrl}/api/reminder/${JSON.parse(localStorage.user)._id}`,
      method: 'GET'
    })
    .then(userReminders => {
      console.log('getReminder RES', userReminders);
      this.setState({ userJournals: userReminders.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleLogOut = (e) => {
    e.preventDefault()
    window.localStorage.clear()
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    this.props.history.push('/login')
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    let newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    axios(
      {
        method: 'post',
        url: `${databaseUrl}/api/users/signup`,
        data: newUser
      })
      .then(response => {
        console.log(response)
        const location = {
          pathname: '/login',
          state: { fromDashboard: true }
        }
        this.props.history.replace(location)
      })
      .catch(err => console.log(err))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    let loginUser = {
      email: this.state.email,
      password: this.state.password
    }
    axios(
      {
        method: 'post',
        url: `${databaseUrl}/api/users/login`,
        data: loginUser
      })
      .then(response => {
        console.log(response)
        window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('user', JSON.stringify(response.data.user))
        this.setState({
          isLoggedIn: true,
          user: response.data.user,
          email: '',
          password: '',
          userJournals: response.data.user.journals
        })
        const location = {
          pathname: '/profile',
          state: { fromDashboard: true }
        }
        this.props.history.replace(location)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className = "main">
        <NavBar isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
        <div className='body'>
          <Switch>
            <Route path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />
            <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={e => this.handleLogOut(e)} />
                )
              }}
            />
            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />
            <Route path='/profile'
              render={(props) => {
                return (
                  <Profile isLoggedIn={this.state.isLoggedIn} user={this.state.user} userJournals={this.state.userJournals}/>
                )
              }}
            />
            <Route path='/journal'
              render={(props) => {
                return (
                  <Journal isLoggedIn={this.state.isLoggedIn} user={this.state.user} addNewJournal={this.addNewJournal} userJournals={this.state.userJournals}/>
                )
              }}
            />
            <Route path='/mood'
              render={(props) => {
                return (
                  <Mood isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
                // addNewMood={this.addNewMood} userMoods={this.state.userMoods}
                )}}
            />
            <Route path='/reminder'
              render={(props) => {
                return (
                  <Reminder isLoggedIn={this.state.isLoggedIn} user={this.state.user} addNewReminder={this.addNewReminder} userReminders={this.state.userReminders}/>
                )
              }}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
