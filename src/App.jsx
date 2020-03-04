import React, { Component } from 'react'
import Header from './components/Header'
import ShowResults from './components/ShowResult'
import ShowCombo from './components/ShowCombo'
import { doBattle } from './helpers/battleHelper'
import './App.css'

const weaponChoices = ['Rock', 'Paper', 'Scissors']

class App extends Component {
  state = {
    opponentChoice: '',
    playerChoice: '',
    result: '',
    combo: 0
  }

  playRound (event) {
    let player = event.target.value
    let opponent = weaponChoices[Math.floor(Math.random() * weaponChoices.length)]
    let results = doBattle(player, opponent)
    this.setState({
      playerChoice: player,
      opponentChoice: opponent,
      result: results
    })
    if (results === 'wisely') {
      let new_combo = this.state.combo
      new_combo++
      this.setState({ combo: new_combo })
    } else { //if(results === 'poorly')
      this.setState({ combo: 0 })
    }
  }

  render () {
    return (
      <>
        <Header />

        <ShowCombo 
        combo={this.state.combo}
        />
        
        <ShowResults
          playerChoice={this.state.playerChoice}
          opponentChoice={this.state.opponentChoice}
          result={this.state.result}
        />

        <div className='ui very padded text container'>
          <div class='button-container'>
            <button
              onClick={event => this.playRound(event)}
              id='rock'
              value='Rock'
            ></button>
            <button
              onClick={event => this.playRound(event)}
              id='paper'
              value='Paper'
            ></button>
            <button
              onClick={event => this.playRound(event)}
              id='scissors'
              value='Scissors'
            ></button>
          </div>
        </div>
      </>
    )
  }
}

export default App
