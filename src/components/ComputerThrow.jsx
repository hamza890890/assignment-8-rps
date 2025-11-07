import React, { useEffect, useState } from 'react'

export default function ComputerThrow({ triggerPlayerChoice, onReveal }) {
  const [currentImg, setCurrentImg] = useState('question')
  const options = ['rock', 'paper', 'scissors']

  useEffect(() => {
    let interval = null
    let timeout = null

    if (triggerPlayerChoice) {
      interval = setInterval(() => {
        const pick = options[Math.floor(Math.random() * options.length)]
        setCurrentImg(pick)
      }, 500)

      timeout = setTimeout(() => {
        clearInterval(interval)
        const finalPick = options[Math.floor(Math.random() * options.length)]
        setCurrentImg(finalPick)
        onReveal(finalPick)
      }, 3000)
    } else {
      setCurrentImg('question')
    }

    return () => {
      if (interval) clearInterval(interval)
      if (timeout) clearTimeout(timeout)
    }
  }, [triggerPlayerChoice])

  return (
    <section className="computer-throw">
      <h2>Computer</h2>
      <img
        src={`/images/${currentImg}.png`}
        alt={`Computer: ${currentImg}`}
        className="computer-image"
      />
    </section>
  )
}
