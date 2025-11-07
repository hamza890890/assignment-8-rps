import React from 'react'

export default function ResetButton({ onReset }) {
  return (
    <button className="reset-button" onClick={onReset}>
      Reset Game
    </button>
  )
}
