import React, { Component } from 'react'
import { Button, Icon } from 'react-materialize'
import { Link } from 'react-router-dom';

import './NavBar.css'

class NavBar extends Component {

  render() {
    let navBarItems = [<Button 
        className="#76ff03 light-green accent-3"
        floating
        node="button"
        tooltip ="Home"
        tooltipOptions ={{
          position: "right"
        }}
        icon={<Icon>home</Icon>}
 
        key={1} href='/' />]
    if (this.props.isLoggedIn) {
      navBarItems.push(
        <Link to='/logout'> <Button
        className="#6a1b9a purple darken-3"
        floating
        node="button"
        tooltip="Logout"
        tooltipOptions ={{
          position: "right"
        }}
        waves="ligth"
        icon={<Icon>exit_to_app</Icon>}
 
        key={2}
      /></Link>
      )
      if (this.props.user != null) {
        navBarItems.push(<Link to='/profile'><Button
          className="#00c853 green accent-4"
          floating
          node="button" 
          tooltip="Profile"
          tooltipOptions ={{
            position: "right"
          }}
          waves="ligth"
          icon={<Icon>person</Icon>}
          key={5} /></Link>)
      }

    } else {
      navBarItems.push(<Link to='/signup'><Button
        className="#4527a0 deep-purple darken-3"
        floating
        node="button" 
        tooltip="Signup!"
        tooltipOptions ={{
          position: "right"
        }}
        waves="ligth"
        icon={<Icon>create</Icon>}
        key={3} /></Link>)
      navBarItems.push(<Link to='/login'><Button
        className="#69f0ae green accent-2"
        floating
        node="button"
        tooltip="Login!"
        tooltipOptions ={{
          position: "right"
        }}
        waves="ligth"
        icon={<Icon>check</Icon>}
         key={4} /></Link>)
    }
    return ( 

<Button
      
      className="#651fff deep-purple accent-3"
      fab="top"
      floating
      large
      node="button"
      tooltip="Menu"
      tooltipOptions ={{
        position: "right"
      }}
      waves="ligth"
      icon={<Icon>menu</Icon>}
      style={{
        right: '23px'
      }}
>
        {navBarItems}
</Button>      
    )
  }
}

export default NavBar
