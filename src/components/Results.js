import React from "react";
const Results = (props) => {
  const { quizes, selectedAnswers } = props;
  const answers = [...quizes.filter((q, i) => q.answer === selectedAnswers[i])];
  return (
    <div className="score">{`${answers.length} / ${selectedAnswers.length}`}</div>
  );
};
export default Results;