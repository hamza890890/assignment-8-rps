import React from 'react'

export default function ScoreBoard({ score }) {
  return (
    <section className="scoreboard">
      <h3>Scoreboard</h3>
      <p>Wins: {score.wins}</p>
      <p>Losses: {score.losses}</p>
      <p>Ties: {score.ties}</p>
    </section>
  )
}
