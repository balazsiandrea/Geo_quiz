import React, { useState } from 'react';
import Quiz from './components/Quiz/Quiz'
import HomePage from './components/Quiz/HomePage';


const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <>
      {startQuiz ? <Quiz /> : <HomePage onStartQuiz={handleStartQuiz} />}
    </>
  );
}

export default App;