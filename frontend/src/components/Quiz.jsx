import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';



function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [showanswers, setShowAnswers] = useState(false);

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
  const handleshowanswers = () => {
    setShowAnswers(true);
  }
  /* A possible answer was clicked */
  const optionClicked = async (isCorrect, questionid, choiceindex) => {
    console.log("hello")
    console.log(choiceindex)
    const answer = {
      choiceindex: choiceindex,
    }

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
      console.log('Answer added', json)

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
          <br />
          <br />
          {/* 2. Current Score  */}
          <h1 className="">Score: {score}</h1>
          {/* 3. Show results or show the question game  */}
          <br />


          <br />
          {showResults ? (
            /* 4. Final Results */
            <div className="final-results">
              <h1>Final Results</h1>
              <h1>
                {score} out of {questions.length} correct - (
                {(score / questions.length) * 100}%)
              </h1>
              <br />
              <br />
              <br />


              <button className="question-button" onClick={() => restartGame()}>Retake task</button>
              <br />
              <br />

              <br />
              <button className="question-button" onClick={handleshowanswers}>Show Answers</button>
              {showanswers && (
                <div>
                  <br />
                  <br />
                  <br />
                  <ul style={{ listStyle: "none" }}>
                    {questions.map((question) => {
                      return (
                        <li className="question-card">
                          <br />

                          <h3 className="question-text"> {question.title}</h3>
                          {/* {question.title} */}
                          <ul styel={{ listStyle: "none" }}>
                            {question.choices.map((choice) => {
                              return (
                                <li className="question-option">

                                  {choice.isCorrect ? (
                                    <span style={{ color: "green" }}>{choice.text}</span>
                                  ) : (
                                    <span>{choice.text}</span>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                  <br />
                  <br />

                </div>)}
            </div>
          ) : (
            /* 5. Question Card  */

            <div className="question-card">
              {/* Current Question  */}
              <h1>
                Question: {currentQuestion + 1} out of {questions.length}
              </h1>
              <br />

              <h3 className="question-text">{questions[currentQuestion].title}</h3>
              {/* <h3 className="question-text">{questions[currentQuestion].title}</h3> */}

              {/* List of possible answers  */}
              <ul style={{ listStyle: "none" }}>
                {questions[currentQuestion].choices.map((choice) => {
                  return (
                    <li className="question-option"
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
