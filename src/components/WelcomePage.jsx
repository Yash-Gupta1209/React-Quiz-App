import React from 'react'
import { useNavigate } from 'react-router-dom'
import { QuestionsData } from './QuestionsData'
const WelcomePage = () => {
  const navigate = useNavigate()

  return (
    <div className='box textcenter'>
      <h1 className='title'>Welcome to the Challenge!</h1>
      <div className='description'>
        <p>You will be presented with {QuestionsData.length} MCQs.</p>
        <p>Can you score 100%?</p>
      </div>
      <div>
        <button
          className='btn'
          onClick={() => navigate('/quiz')}
        >
          Start Quiz
        </button>
      </div>
    </div>
  )
}

export default WelcomePage