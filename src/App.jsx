import React, { Component } from 'react'
import Selection from './components/showSelections'
import Header from './components/Header'
import './App.css'
import Opponent from './components/Opponent';

class App extends Component {
  
  state = {
    backgroundImage: "url('./img/rock.png')"
  };

  render () {
    return (

        <div>
          <Header />
          <Opponent />
          <Selection />
        </div>
    )
  }
}

export default App
