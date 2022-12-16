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

    const handleAnswer= async(e) =>{

    }
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = new URLSearchParams(window.location.search);
        const taskid = params.get('taskid');
        console.log(taskid);
    
       // e.preventDefault()
       const choices = [choice1, choice2, choice3, choice4]
        console.log(choices)
        const question = { 
            title: questionTitle,
            choices: choices,
            task: taskid
        }
        console.log(taskid);

        console.log("task defined");
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
        
        <h2>Simple Question 1</h2>
        <label>Question title</label>
        <input 
            type="text"
            onChange={(e)=>setQuestionTitle(e.target.value)}
            value={questionTitle}
        />
        <br/>
        <input onClick={()=>handleAnswer} type="checkbox" id="1"></input>
        <label> Choice 1</label>
        <input
            type="text"
            onChange={(e)=>setChoice1(e.target.value)}
        />

        <br/>

        <input onClick={() => handleAnswer} type="checkbox" id="2"></input>
        <label> Choice 2</label>
        <input
            type="text"
            onChange={(e)=>setChoice2(e.target.value)}
        />

        <br/>
        <input onClick={()=>handleAnswer} type="checkbox" id="3"></input>
        <label> Choice 3</label>
        <input
            type="text"
            onChange={(e)=>setChoice3(e.target.value)}
        />

        <br/>
        <input onClick={()=>handleAnswer} type="checkbox" id="4"></input>
        <label> Choice 4</label>
        <input
            type="text"
            onChange={(e)=>setChoice4(e.target.value)}
        />
        <button onClick={handleSubmit}>Next</button>

        <br/>

        <Link className='btn' to={'instructorpage'}>Finish</Link>
    </form>
    </div>

    )
    }

export default AddQuestion
