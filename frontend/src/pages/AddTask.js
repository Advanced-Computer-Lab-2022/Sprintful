// import { Button, MenuItem, TextField } from "@material-ui/core";
//import { useState } from "react";
// import { useHistory } from "react-router";
//import ErrorMessage from "../components/errorMessage";

//import react, { useRef, 
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./AddTask.css"
import axios from 'axios'
//import Course from '../../../models/courseModel';


const AddTaskMain = () => {
     //const inputRef = useRef(null);
     const[courses,setCourses] = useState([])
     const [option, setOption] = useState("");
     const [subtitleOption, setSubtitleOption]= useState("");
     const [subtitles, setSubtitles] = useState([]);
     const [title,setTitle] = useState("");
    

     useEffect( ()=>{
        const fetchCourses =async () =>{
            await axios.get('http://localhost:5000/api/courses/').then(
           (res) => { 
               const courses = res.data
               //console.log(courses)
               setCourses(courses)
           }
            );
        }

        // const fetchSubtitles =async () =>{
        //     await axios.get(`http://localhost:5000/api/courses/getSubtitles?courseId=${option}`).then(
        //    (res) => { 
        //        const courses = res.data
        //        //console.log(courses)
        //        setSubtitles(courses)
        //    }
        //     );
        // }

        fetchCourses()
       // fetchSubtitles()
    }, [])

    const fetchSubtitles =async () =>{
        await axios.get(`http://localhost:5000/api/courses/getSubtitles?courseId=${option}`).then(
       (res) => { 
           const courses = res.data
           //console.log(courses)
           setSubtitles(courses)
       }
        );
    }

    // const getId = async () =>{
    //     await axios.get(`http://localhost:5000/api/courses/getSubtitleId?id=${finalOption}`).then(
    //         (res) => { 
    //             const courses = res.data
    //             //console.log(courses)
    //             setSubtitles(courses)
    //         }
    //          );
    // }


    // useEffect( ()=>{
    //     const fecthSubtitles =async () =>{
    //         await axios.get(`http://localhost:5000/api/courses/getSubtitles?courseId=${option}`).then(
    //        (res) => { 
    //            const courses = res.data
    //            //console.log(courses)
    //            setSubtitles(courses)
    //        }
    //         );
    //     }
    //     fecthSubtitles()
    // }, [])

    
    console.log(courses)

    const handleSubmit = async (e) => {
        // const task={
        //     title
        // }
        // const response = await fetch('/api/courses/',{
        //     method:'POST',
        //     body :JSON.stringify(task),
        //     headers :{
        //         'Content-Type':'application/json'
        //     }
        //    })
        
    }

return(
    <div className='container'>
    <h1 className='title text-light' >Task Application</h1>

    <ol>
        <li>You will be asked questions one after another.</li>
        <li>1 point is awarded for the correct answer.</li>
        <li>Each question has four options. You can choose only one options.</li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
    </ol>

      <form id="form" onSubmit={handleSubmit}>
         {/* <input ref={inputRef} className="userid" type="text" placeholder='Task Title' />  */}
         <p>Choose course</p>
          <select
            placeholder= "View Options"
            value={option}
            onChange={(e) => setOption(e.target.value)}
         > 

         <option selected disabled key="0"> Select a course</option>
            {courses.map((op) => (
            <option key={op.id} value={op._id}> {op.title} </option>
            ))}  

        

         </select> 

         {console.log(option)}
         {console.log(subtitles)}

         <p>Choose Subtitle</p>

        <select
        onClick={()=>fetchSubtitles()}
        onChange={(e) => setSubtitleOption(e.target.value)}
        >
         <option selected disabled key="0"> Select a Subtitle</option>

         {subtitles.map((sub) => (
            <option key={sub.id} value={sub.id}> {sub} </option>
            ))}   
            <option key="1" value="option"> Final Exam </option>
        </select> 

        <p>Task title</p>
        <input 
            id = "title"
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
        />


    </form>  
    {/* <Link to={`/addTask/${option}/${subtitleOption}`} className="btn btn-primary">Start Quiz</Link> */}

    <div className='start'>
        <Link className='btn' to={'questions'}>Continue</Link>
    </div>

</div>
)
}

export default AddTaskMain