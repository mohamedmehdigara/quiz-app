import React, {useState} from "react";
import { quizes } from "./static/quizData";
import Welcome from "./components/Welcome";
import QuizContainer from "./components/QuizContainer";
import Results from "./components/Results";
import Button from "./components/Button";


function App(){
const [currentQuiz, setCurrentQuiz] = useState(-1)
const [selectedAnswers, setSelectedAnswers] = useState([])
return (
  <div>
  <Button/>
  <QuizContainer/>
  <Results/>
  <Welcome/>
  <quizData/>
  </div>
  );
};
export default App;