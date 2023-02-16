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
    navigate('/score', { state: { score: score } })
  }
  console.log("Questions DAta", QuestionsData);
  return (
    <div>
      {
        currentQuestion > 0 && <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>Back</button>
      }

      <Question
        currentQuestion={currentQuestion}
        activeQuestion={QuestionsData[currentQuestion]}
        submittedData={submittedData}
        updateSubmission={updateSubmission}
        selectedOption={submittedData[currentQuestion]}
      />

      {
        currentQuestion < QuestionsData.length - 1
          ? <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>
          : <button onClick={() => calculateScore()}>Submit</button>
      }
    </div>
  )
}

export default QuizPage