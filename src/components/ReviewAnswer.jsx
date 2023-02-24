import React from 'react'

const ReviewAnswer = ({ submittedData, setCurrentQuestion }) => {
    return (
        <div className='box review-answer'>
            <h1 className='answer-title'>Review Answer</h1>
            {
                Object.keys(submittedData).map(key => (
                    <button
                        onClick={() => setCurrentQuestion(parseInt(key))}
                        className="review-answer-btn"
                    >
                        #{parseInt(key) + 1} {submittedData[key]}
                    </button>
                ))
            }
        </div>
    )
}

export default ReviewAnswer