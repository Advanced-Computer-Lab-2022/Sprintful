import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

// import "./Quiz.css";

function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(null);

  const params = new URLSearchParams(window.location.search);
  const taskid = params.get('taskid');

  useEffect(() => {
    const fetchData = async () => {
     await axios.get(`http://localhost:5000/api/questions/getQuestions?taskid=${taskid}`)

        .then((res) => {
          console.log(res.data);
          setQuestions(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div>
      {questions && ( 
      
      <div className="Quiz">
      
      {/* 1. Header  */}
      <h1>Task </h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Retake task</button>
        </div>
      ) : (
        /* 5. Question Card  */

        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            
          <h3 className="question-text">{questions[currentQuestion].title}</h3>
          {/* <h3 className="question-text">{questions[currentQuestion].title}</h3> */}

            {/* List of possible answers  */}
            <ul>
            {questions[currentQuestion].choices.map((choice) => {
              return (
                <li
                  key={choice._id}
                  onClick={() => optionClicked(choice.isCorrect)}
                >
                  {choice.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}

    </div>
      )}
    </div>
    
  );
}

export default Quiz;
