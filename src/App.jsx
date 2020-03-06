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
    this.setState({
      playerChoice: event.target.value,
      opponentChoice:
        weaponChoices[Math.floor(Math.random() * weaponChoices.length)]
    })
    let results = doBattle(this.state.playerChoice, this.state.opponentChoice)
    this.setState({
      result: results
    })
    if (results === 'wisely') {
      let new_combo = this.state.combo
      new_combo++
      this.setState({ combo: new_combo })
    } else {
      this.setState({ combo: 0 })
    }
  }

  render () {
    const { playerChoice } = this.state
    let displayResults

    if (playerChoice) {
      displayResults = (
        <ShowResults
          playerChoice={this.state.playerChoice}
          opponentChoice={this.state.opponentChoice}
          result={doBattle(this.state.playerChoice, this.state.opponentChoice)}
        />
      )
    } else {
      displayResults = (<div className='ui very padded text container'><h2 className="equally">Choose Wisely</h2></div>)
    }

    return (
      <>
        <Header />
        <ShowCombo combo={this.state.combo} />
        {displayResults}
        {/* <ShowResults
          playerChoice={this.state.playerChoice}
          opponentChoice={this.state.opponentChoice}
          result={doBattle(this.state.playerChoice, this.state.opponentChoice)}
        /> */}
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
