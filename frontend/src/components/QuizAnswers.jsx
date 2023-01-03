import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

//import "./Quiz.css";

function QuizAnswers() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(null);

  const params = new URLSearchParams(window.location.search);
  const taskid = params.get('taskid');

  //http://localhost:5000/api/questions/addQuestion?taskid=${taskid}
  //http://localhost:5000/api/answers/addAnswer?questionid=${questionid}

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

            {/* /* 5. Question Card  */ }
          {/* <ul>
            {questions.map((question) => {
              <li>{ question.title}</li> */}
              {/* // <li>
                // <div className="question-card">
                //   <h2>
                //     Question: {currentQuestion + 1} out of {questions.length}
                //   </h2>

                //   <h3 className="question-text">{question.title}</h3>

                //   <ul>
                //     {question.choices.map((choice) => { */}
                {/* //       return (
                //         <li
                //           key={choice._id}
                //         >
                //           {choice.text}
                //         </li>
                //       );
                //     })}
                //   </ul>

                // </div> */}
              {/* </li> */}
          {/* //   })}
          // </ul> */}
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
          </div>

        </div>
      )}
    </div>

  );
}

export default QuizAnswers;
