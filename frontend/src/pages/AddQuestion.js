import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router";
import "./AddQuestion.css"


const AddQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('')
    const [choice1, setChoice1] = useState('')
    const [choice2, setChoice2] = useState('')
    const [choice3, setChoice3] = useState('')
    const [choice4, setChoice4] = useState('')
    const [correctl, setCorrect1] = useState(false)
    const [correct2, setCorrect2] = useState(false)
    const [correct3, setCorrect3] = useState(false)
    const [correct4, setCorrect4] = useState(false)

    const navigate=useNavigate();

    const handleNextSubmit = async (e) => {
        e.preventDefault();
        const params = new URLSearchParams(window.location.search);
        const taskid = params.get('taskid');
        console.log(taskid);
    
       // e.preventDefault()
       const ch1 = {
        text: choice1, 
        isCorrect: correctl
    }
    const ch2 = {
        text: choice2, 
        isCorrect: correct2
    }
    const ch3 = {
        text: choice3, 
        isCorrect: correct3
    }
    const ch4 = {
        text: choice4, 
        isCorrect: correct4
    }

       const choices = [ch1,ch2,ch3,ch4]
        console.log(choices)
        const question = { 
            title: questionTitle,
            choices: choices,
            task: taskid
        }
       // console.log(taskid);

       // console.log("task defined");
        const response = await fetch(`http://localhost:5000/api/questions/addQuestion?taskid=${taskid}`,{
            method:'POST',
            body :JSON.stringify(question),
            headers :{
                'Content-Type':'application/json'
            }
           })

           const json =await response.json()
           if(response.ok){
       
          //const taskId=json._id;
          console.log('Question added',json)
          setQuestionTitle('')
          setChoice1('')
          setChoice2('')
          setChoice3('')
          setChoice4('')

        //   navigate(`/addQuestion/${taskid}`);
        //   navigate(0);

           }   
           else{
            console.log("fail")
           }
    }

    

    return (
        <div className='question'>
        <form id="form">
        
        <h2>Add Question</h2>
        <label>Question title</label>
        <input 
            type="text"
            onChange={(e)=>setQuestionTitle(e.target.value)}
            value={questionTitle}

        />
        <br/>
        <input onClick={()=>setCorrect1(current => !current)} type="checkbox" id="1"></input>
        {/* {console.log("correct1: " + correctl)} */}
        <label> Choice 1</label>
        <input
            type="text"
            onChange={(e)=>setChoice1(e.target.value)}
            value={choice1}
        />

        <br/>

        <input onClick={()=>setCorrect2(current => !current)} type="checkbox" id="2"></input>
        <label> Choice 2</label>
        <input
            type="text"
            onChange={(e)=>setChoice2(e.target.value)}
            value={choice2}
        />

        <br/>
        <input onClick={()=>setCorrect3(current => !current)} type="checkbox" id="3"></input>
        <label> Choice 3</label>
        <input
            type="text"
            onChange={(e)=>setChoice3(e.target.value)}
            value={choice3}
        />

        <br/>
        <input onClick={()=>setCorrect4(current => !current)} type="checkbox" id="4"></input>
        <label> Choice 4</label>
        <input
            type="text"
            onChange={(e)=>setChoice4(e.target.value)}
            value={choice4}
        />
        <br/>
        <button onClick={handleNextSubmit} style={{marginRight: "3em"}}>Next</button>

        

        <button>Finish</button>
    </form>
    </div>

    )
    }

export default AddQuestion
