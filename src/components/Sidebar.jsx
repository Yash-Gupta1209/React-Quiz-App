import React from 'react';

const Sidebar = ({ questions, onQuestionClick }) => {
  return (
    <div className="sidebar">
      <ul>
        {questions.map((_, index) => (
          <li key={index} onClick={() => onQuestionClick(index)}>
            Question {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
