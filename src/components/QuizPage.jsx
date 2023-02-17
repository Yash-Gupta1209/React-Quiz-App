import React, { useState } from 'react'
import Question from './Question';
import { QuestionsData } from './QuestionsData';
import { useNavigate } from 'react-router-dom';
const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [submittedData, setSubmittedData] = useState({});
  const navigate = useNavigate();
  const updateSubmission = (index, value) => {
    setSubmittedData({ ...submittedData, [index]: value })
  }

  const calculateScore = () => {
    let score = 0;
    QuestionsData.forEach((question, index) => {
      if (question.answer === submittedData[index]) {
        score += 1;
      }
    })
    setScore(score);
    navigate('/score', { state: { 
      score: score,
      submittedData: submittedData
    }})
  }
  console.log("Questions DAta", QuestionsData);
  return (
    <div className='box'>
      <Question
        currentQuestion={currentQuestion}
        activeQuestion={QuestionsData[currentQuestion]}
        submittedData={submittedData}
        updateSubmission={updateSubmission}
        selectedOption={submittedData[currentQuestion]}
      />
      <div className='textcenter'>
        {
          <button
            className={`btn ${currentQuestion == 0 && 'disabled'}`}
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            disabled={currentQuestion === 0}
          >
            Back
          </button>
        }
        {
          currentQuestion < QuestionsData.length - 1
            ? <button
              className={`btn ${!submittedData[currentQuestion] ? 'disabled' : ""}`}
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              disabled={!submittedData[currentQuestion]}
              title={submittedData[currentQuestion] ? "" : "Select Option First"}
            >
              Next
            </button>
            : <button
              className={`btn ${!submittedData[currentQuestion] ? 'disabled' : ""}`}
              onClick={() => calculateScore()}
              disabled={!submittedData[currentQuestion]}
              title={submittedData[currentQuestion] ? "" : "Select Option First"}
            >
              Submit
            </button>
        }
      </div>
    </div>
  )
}

export default QuizPage