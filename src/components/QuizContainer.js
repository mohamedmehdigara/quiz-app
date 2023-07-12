import React from "react";
import Button from "../components/Button";

const QuizContainer = ({quizes, selectedAnswers,setSelectedAnswers,currentQuiz,setCurrentQuiz}) => {
  const quiz = quizes[currentQuiz]
return (
    <div>
      <h3>{quiz.question}</h3>
    </div>
  );

}
export default QuizContainer;