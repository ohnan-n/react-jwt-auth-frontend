import React, { Component } from 'react'
import Spritesheet from 'react-responsive-spritesheet';
import slimeline from './slimeline.png';

class Slime extends Component {
  
  render() {
      return(
        <Spritesheet 
        image={slimeline}
        widthFrame={361}
        heightFrame={270}
        steps={10}
        fps={6}
        loop={true}
        autoplay={true}
      />
      )
  }

}

export default Slime
