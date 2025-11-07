import React from 'react'

export default function ResultDisplay({ player, computer, result }) {
  if (!player && !computer) {
    return <p>Make your move to start the game.</p>
  }

  let message = ''
  if (result === 'win') message = 'You win!'
  else if (result === 'lose') message = 'You lose.'
  else if (result === 'tie') message = "It's a tie."

  return (
    <div className="result-display">
      <p>Player: {player || '-'} | Computer: {computer || '-'}</p>
      {result && <p className={`result-message ${result}`}>{message}</p>}
    </div>
  )
}
