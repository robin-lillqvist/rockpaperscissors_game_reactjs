import React from 'react'

const ShowResults = props => {
  let displayResult

  if (props.playerChoice && props.opponentChoice && props.result) {
    displayResult = (
      <>
        <div className='fight-container'>
          <div class='player'>
            <div class='ui teal pointing below label'>You</div>
            <div className='playerChoice'>{props.playerChoice}</div>
          </div>

          <div className='vs'>vs.</div>

          <div class='computer'>
            <div class='ui teal pointing below label'>Opponent</div>
            <div className='computerChoice'>{props.opponentChoice}</div>
          </div>
        </div>

        <div id="results" className={'results ' +props.result}>You choose {props.result}!</div>
      </>
    )
  }

  return (
    <>
      <div className='ui very padded text container'>{displayResult}</div>
    </>
  )
}

export default ShowResults
