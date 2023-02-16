import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome to the Challenge!</h1>
      <p>You will be presented with 3 MCQs.</p>
      <p>Can you score 100%?</p>
      <button onClick={() => navigate('/quiz') }>Start Quiz</button>
    </div>
  )
}

export default WelcomePage