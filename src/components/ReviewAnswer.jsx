import React from 'react'

const ReviewAnswer = ({ submittedData }) => {
    return (
        <div className='box review-answer'>
            <h1 className='answer-title'>Review Answer</h1>
            {
                Object.keys(submittedData).map(key => <p>#{parseInt(key) + 1} {submittedData[key]}</p>)
            }
        </div>
    )
}

export default ReviewAnswer