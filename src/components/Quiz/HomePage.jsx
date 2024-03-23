import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const HomePage = ({ onStartQuiz }) => {
  return (
    <div>
      <h1 className='title'>Welcome to our Geography Quiz!</h1>
      <p className='welcomeSection'>Are you ready to embark on a journey around the world? Here you can test your knowledge of countries, capitals, landmarks, and more. With each question, you'll discover fascinating facts about different regions, cultures, and natural wonders across the globe.</p>
      <p className='toStart'>Click the button below to start your adventure and begin our Geography Quiz journey!</p>
      <button className='startButton' onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default HomePage;