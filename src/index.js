import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <div className = "home">
    <Router >
        <App />
    </Router>
   </div> 
    ,
    document.getElementById('root')
)
