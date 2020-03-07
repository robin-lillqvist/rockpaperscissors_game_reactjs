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
    let opponent =
      weaponChoices[Math.floor(Math.random() * weaponChoices.length)]
    let results = doBattle(player, opponent)
    let combo = this.state.combo

    if (results === 'wisely') {
      combo++
    } else {
      combo = 0
    }
    this.setState({
      playerChoice: player,
      opponentChoice: opponent,
      result: results,
      combo: combo
    })
  }

  render () {
    let renderResults

    if (this.state.result !== '') {
      renderResults = (
        <>
          <ShowResults
            playerChoice={this.state.playerChoice}
            opponentChoice={this.state.opponentChoice}
            result={this.state.result}
          />
        </>
      )
    } else {
      renderResults = (
        <div className='ui very padded text container'>
          <h2 className='equally'>Choose wisely</h2>
        </div>
      )
    }

    return (
      <>
        <Header />
        <ShowCombo combo={this.state.combo} />
        {renderResults}

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
