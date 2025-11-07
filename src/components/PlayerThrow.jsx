import React from 'react'

export default function PlayerThrow({ selected, onSelect, disabled }) {
  const choices = ['rock', 'paper', 'scissors']

  return (
    <section className="player-throw">
      <h2>Player</h2>
      <div className="choices">
        {choices.map(choice => (
          <button
            key={choice}
            className={`choice-button ${selected === choice ? 'selected' : ''}`}
            onClick={() => onSelect(choice)}
            disabled={disabled}
            aria-label={`Choose ${choice}`}
          >
            <img src={`/images/${choice}.png`} alt={choice} className="choice-image" />
          </button>
        ))}
      </div>
    </section>
  )
}
