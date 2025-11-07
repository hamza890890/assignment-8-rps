import React, { useState } from 'react'
import PlayerThrow from './components/PlayerThrow'
import ComputerThrow from './components/ComputerThrow'
import ResultDisplay from './components/ResultDisplay'
import ScoreBoard from './components/ScoreBoard'
import ResetButton from './components/ResetButton'

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 })

  function handlePlayerSelect(choice) {
    if (isPlaying) return
    setPlayerChoice(choice)
    setIsPlaying(true)
    setComputerChoice(null)
    setResult('')
  }

  function handleComputerReveal(computerPick) {
    setComputerChoice(computerPick)
    const outcome = determineOutcome(playerChoice, computerPick)
    setResult(outcome)
    setScore(prev => {
      const updated = { ...prev }
      if (outcome === 'win') updated.wins++
      else if (outcome === 'lose') updated.losses++
      else updated.ties++
      return updated
    })
    setIsPlaying(false)
  }

  function handleReset() {
    setPlayerChoice(null)
    setComputerChoice(null)
    setResult('')
    setIsPlaying(false)
    setScore({ wins: 0, losses: 0, ties: 0 })
  }

  return (
    <main className="app-container">
      <header>
        <h1>Rock — Paper — Scissors</h1>
        <p className="instructions">Click an image to play.</p>
      </header>

      <section className="game-area">
        <PlayerThrow selected={playerChoice} onSelect={handlePlayerSelect} disabled={isPlaying} />
        <ComputerThrow triggerPlayerChoice={playerChoice} onReveal={handleComputerReveal} />
      </section>

      <ResultDisplay player={playerChoice} computer={computerChoice} result={result} />
      <ScoreBoard score={score} />
      <ResetButton onReset={handleReset} />

      <footer>
        <p>Simple React app following basic state/effect principles.</p>
      </footer>
    </main>
  )
}

function determineOutcome(player, computer) {
  if (!player || !computer) return ''
  if (player === computer) return 'tie'
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) return 'win'
  return 'lose'
}
