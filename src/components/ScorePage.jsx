import React from 'react'
import { useLocation } from 'react-router-dom'
const ScorePage = () => {
  const { state } = useLocation();
  console.log(state, "state")
  return (
    <div>
      <h1>Score: {state.score}</h1>
    </div>
  )
}

export default ScorePage