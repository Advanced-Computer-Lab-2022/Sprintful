import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

import "./Quiz.css";


function Quiz() {
  const style1 = {   //.question-card 
    /* Center the div  */
    margin: "0 auto",

    /* Dimensions  */
    width: "80%", /* Can be in percentage also. */
    height: "auto",

    /* Visual  */
    backgroundColor: "gray",
    padding: "16px",
    borderRadius: "16px",
    color: "white",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px",
  }
  const style2 = {
    marginTop: "8px",
    backgroundColor: "darkgray",
    padding: "16px",
    border: "3px solid white",
    borderRadius: "20px",
    fontSize: "20px"
}


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
  const optionClicked = async (isCorrect, questionid, choiceindex) => {
    console.log("hello")
    console.log(choiceindex)
    const answer = {
      choiceindex: choiceindex,
    }

    //console.log("answer" + answer)
    console.log("qid= " + questionid)
    const response = await fetch(`http://localhost:5000/api/answers/addAnswer?questionid=${questionid}&userid=63a6b5833f6eb59032850c0f`, {
      method: 'POST',
      body: JSON.stringify(answer),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    console.log("answer test" + json);
    if (response.ok) {

      // const taskId=json._id;
      console.log('Answer added', json)
      // setQuestionTitle('')
      // setChoice1('')
      // setChoice2('')
      // setChoice3('')
      // setChoice4('')

      //   navigate(`/addQuestion/${taskid}`);
      //   navigate(0);

    }
    else {
      console.log("fail")
    }

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
    <div >
      {questions && (

        <div style={{ textAlign: "center" }}>

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

            <div style={{ style1 }}>
              {/* Current Question  */}
              <h2>
                Question: {currentQuestion + 1} out of {questions.length}
              </h2>

              <h3 className="question-text">{questions[currentQuestion].title}</h3>
              {/* <h3 className="question-text">{questions[currentQuestion].title}</h3> */}

              {/* List of possible answers  */}
              <ul styel={{ listStyle: "none"}}>
              {questions[currentQuestion].choices.map((choice) => {
                return (
                  <li style={{style2}}
                    key={choice._id}
                    onClick={() => optionClicked(choice.isCorrect, questions[currentQuestion]._id, choice._id)}
                  >
                    {choice.text}
                  </li>
                );
              })}
            </ul>
        </div>
      )}

    </div>
  )
}
    </div >

  );
}

export default Quiz;
