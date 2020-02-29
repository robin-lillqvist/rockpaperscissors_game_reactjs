import React, { Component } from 'react'
import rock from '../img/rock.png';
import paper from '../img/paper.png';
import scissor from '../img/scissor.png';

class showSelections extends Component {
  render() {
    return (
      <div id="selections">
        <img src={rock} id="rock" alt="rock"/>
        <img src={paper} id="paper" alt="paper"/>
        <img src={scissor} id="scissor" alt="scissor"/>
      </div>
    )
  }
}
export default showSelections