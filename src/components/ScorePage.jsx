import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { QuestionsData } from './QuestionsData';

const ScorePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className='box score-box'>
      <h1 className='textcenter'>Congratulations</h1>
      <h2 className='textcenter score'>Your Score: {state.score}</h2>
      <div className='answers'>
        {
          QuestionsData.map((question, index) => (
            <div className='answer'>
              <p>Q{index + 1}. {question.question}</p>
              <p className={question.answer === state.submittedData[index] ? "correct" : "incorrect"}>
                {
                  state.submittedData[index] 
                  ? `Your Answer: ${state.submittedData[index]}`
                  : "Not Answered"
                }
              </p>
            </div>
          ))}
      </div>
      <div>
        <button
          className='btn textcenter'
          onClick={() => navigate('/')}
        >
          Start Again
        </button>
      </div>
    </div>
  )
}

export default ScorePage