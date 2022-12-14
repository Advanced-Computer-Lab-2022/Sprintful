// import { Button, MenuItem, TextField } from "@material-ui/core";
//import { useState } from "react";
// import { useHistory } from "react-router";
//import ErrorMessage from "../components/errorMessage";

//import react, { useRef, 
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./AddTask.css"
import axios from 'axios'
import {useNavigate} from "react-router";
//import { getCourseById } from '../../../backend/controllers/courseController'
//import Course from '../../../models/courseModel';


const AddTaskMain = () => {
     //const inputRef = useRef(null);
     const[courses,setCourses] = useState([])
     const [option, setOption] = useState("");
     const [subtitleOption, setSubtitleOption]= useState("");
     const [subtitles, setSubtitles] = useState([]);
     const [title,setTitle] = useState("");
     const[subId, setSubId]=useState(0);
     const[courseRef, setCourseRef]= useState(false)
     const[task, setTask] = useState([])

     useEffect( ()=>{
        const fetchCourses =async () =>{
            await axios.get('http://localhost:5000/api/courses/').then(
           (res) => { 
               const courses = res.data
               setCourses(courses)
               console.log(courses)

           }
            );
        }
        
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
        //getId();
    }
    //let subId=0;
    const getId = async () =>{
        if(subtitleOption==="option"){
            setSubId(option._id)
            setCourseRef(true)
        }
        await axios.get(`http://localhost:5000/api/courses/getSubtitleId?title=${subtitleOption}`).then(
            (res) => { 
                const subIdArr = res.data
                //console.log("1"+subId)
                //setSubtitles(courses)
                setSubId( subIdArr.reduce((acc, curr) => `${acc}${curr._id}` ,''))

                //console.log("inside "+subId)
            }
             );
    }
//console.log("out"+ subId)

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

    console.log("outside"+subId)
    //console.log(courses)
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(courseRef){
        setTask({
            title: title, 
            course: subId
        })
    }
    else{
        setTask({
            title: title, 
            subtitle: subId
        })

    }
        const response = await fetch(`http://localhost:5000/api/tasks/`,{
            method:'POST',
            body :JSON.stringify(task),
            headers :{
                'Content-Type':'application/json'
            }
           })

           const json =await response.json()
           if(response.ok){
       
          const taskId=json._id;
          console.log('Task added',json)
       
           
           console.log("id in handleSubmit: "+subId)
           navigate(`/addQuestion/${taskId}`);
           navigate(0);
           }   
    }

return(
    <div className='task'>
    <h1 className='title'>Task Application</h1>

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
            onClick={()=>fetchSubtitles()}
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
        // onClick={()=>getId()}
        onChange={(e) => setSubtitleOption(e.target.value)
        }
        >
         <option selected disabled key="0"> Select a Subtitle</option>

         {subtitles.map((sub) => (
            <option key={sub.id} value={sub.title}> {sub} </option>
            ))}   
            <option key="1" value="option"> Final Exam </option>
        </select> 

        <p>Task title</p>
        <input 
            id = "title"
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
            onClick={()=>getId()}
            value={title}
        />

        <button>Continue</button>

    </form>  
    {/* <Link to={`/addTask/${option}/${subtitleOption}`} className="btn btn-primary">Start Quiz</Link> */}

    {/* <div className='start'>
        <Link onClick={handleSubmit} className='btn' to={'questions'}>Continue</Link>
    </div> */}
</div>
)
}

export default AddTaskMain