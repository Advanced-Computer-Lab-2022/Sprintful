// import { Button, MenuItem, TextField } from "@material-ui/core";
//import { useState } from "react";
// import { useHistory } from "react-router";
//import ErrorMessage from "../components/errorMessage";

//import react, { useRef, 
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./AddTask.css"
import axios from 'axios'
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router";
//import { getCourseById } from '../../../backend/controllers/courseController'
//import Course from '../../../models/courseModel';
import InstructorNavBarCom from '../components/InstructorNavBarCom';

const AddTaskMain = () => {
     //const inputRef = useRef(null);
     const[courses,setCourses] = useState([])
     const [option, setOption] = useState("");
     const [subtitleOption, setSubtitleOption]= useState("");
     const [subtitles, setSubtitles] = useState([]);
     const [title,setTitle] = useState("");
     const[subId, setSubId]=useState(null);
     const[courseRef, setCourseRef]= useState(false)
     const[task, setTask] = useState([])

     const {courseid}=useParams();

     const header = {
        color: "darkRed",
        fontFamily: "Times New Roman",
        fontSize: "28px",
        textAlign: "center",
        fontWeight: "bold"
        
      };
      const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
         console.log(id)
    

    //  useEffect( ()=>{
    //     const fetchCourses =async () =>{
    //         await axios.get(`http://localhost:5000/api/courses/instructor/?id=${id}`).then(
    //        (res) => { 
    //            const courses = res.data
    //            setCourses(courses)
    //            console.log(courses)

    //        }
    //         );
    //     }
        
    //     fetchCourses()
    //    // fetchSubtitles()
    // }, [])

    // const fetchSubtitles =async () =>{
    //     console.log("option " +option)
    //     await axios.get(`http://localhost:5000/api/courses/getSubtitles?courseId=${option}`).then(
    //    (res) => { 
    //        const courses = res.data
    //        //console.log(courses)
    //        setSubtitles(courses)
    //    }
    //     );
    //     //getId();
    // }
    //let subId=0;
//     const getId = async () =>{
//         console.log("option " + option )
//         if(subtitleOption=="option"){
//             setSubId(option)
//             console.log("subId set for final exam")
//             setCourseRef(true)
//         }
//        else{ await axios.get(`http://localhost:5000/api/courses/getSubtitleId?title=${subtitleOption}`).then(
//             (res) => { 
//                 const subIdArr = res.data
//                 //console.log("1"+subId)
//                 //setSubtitles(courses)
//                 setSubId( subIdArr.reduce((acc, curr) => `${acc}${curr._id}` ,''))

//                 //console.log("inside "+subId)
//             }
//              );
//     }
//     console.log("sub Id " +subId)
// }
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

    // console.log("outside "+subId)
    // //console.log(courses)
     const navigate=useNavigate();

    const handleSubmit = async () => {
        console.log("hello from handle submit");
        //e.preventDefault();
        
        // setTask({
        //     title: title, 
        //     course: subId
        // })
    
        setTask({
            title: title, 
            subtitle: id
        })
         console.log(task)
        console.log("title: "+title)
    //console.log("id in handleSubmit: "+subId)
        const response = await fetch(`http://localhost:5000/api/tasks/addTask?id=${id}`,{
            method:'POST',
            body :JSON.stringify(task),
            headers :{
                'Content-Type':'application/json'
            }
           })

           const json =await response.json()
           console.log("res: "+ json)
           if(response.ok){
       
          const taskId=json._id;
          console.log('Task added',json)
       
           
           navigate(`/addQuestion/${courseid}?taskid=${taskId}`);
           navigate(0);
           }   
           else{
            console.log("fail")
           }
    }

return(
    <div>
        <div id="topbar" class="">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 p-0 text-center">
                            <ul class="top-menu">
                                <li><a href="tel:+201001004070">Phone:
                                        +201001004070</a></li>
                                <li><a href="mailto:info@cancham.org.eg">Email:
                                        info@cancham.org.eg</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 hidden-sm hidden-xs">
                            <div class="social-icons social-icons-colored-hover">
                                <ul>
                                    <li class="social-facebook"><a href="https://www.facebook.com/CanCham/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li class="social-twitter"><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                    <li class="social-youtube"><a href="https://www.youtube.com/channel/UC1ykoFKsMjVQCx3TeLIXDbg" target="_blank"><i class="fa fa-youtube"></i></a></li>
                                    <li class="social-gplus"><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="social-linkedin"><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/> 
           
  {/* <!-- ***** Header Area Start ***** --> */}
  <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <InstructorNavBarCom />
              </div>
          </div>
      </div>
  </header>
  <hr/>
  {/* <!-- ***** Header Area End ***** --> */}


  <div className="main-banner">
  <div id="page-wrapper" style={{width: "1200px", height: "500px",left: "100px", margin: 70, background: "#DCDCDC" ,marginTop:"-200px"}} >
             <br/>
             <div id="page-inner" style={{width: "1100px", height: "400px", margin: 40, background: "white"}}>
                <br/>
                <div className="container">
                <div style={header}>Add Exercise's Title</div>
                <br/>
  <br/>
  <div>         
   

<div className="create">
    <div className='task'>
    <br/>
    
    <p style={{color: "black", fontFamily: "Times New Roman"}}>Task Title: </p>
        <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                    marginLeft: "115px"
                   }}
            id = "title"
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
            //onClick={()=>getId()}
            value={title}
            required
        />
        <br/>
        <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    width: "100px",
                                                    position: "relative",
                                                    marginLeft: "86px"}} onClick={()=>handleSubmit()}>Continue</button>



        </div>
        </div>

        </div> 
        </div>
                <br/>
                </div>
                </div>
            </div>
            <footer style={{height: "100px"}}>
                <div className="container" style={{height: "20px"}}>
                 
                        <div className="col-lg-4">
                            <div className="about">
                                    <img src="/upload/logo.png" alt="Homepage" style={{width: "180px", 
                                                                                    height: "70px"}}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="contact-us">
                                <h4 style= {{color: "black",  fontFamily: "Times New Roman"}}>Contact Us</h4>
                                <p style={{ fontFamily: "Times New Roman"}}>If you have any suggestions email us on info@cancham.org.eg</p>
                                <p style={{ fontFamily: "Times New Roman"}}>Call us +201001004070 from 9 AM to 4 PM</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-us">
                                <h4 style= {{color: "black",  fontFamily: "Times New Roman"}}>Location</h4>
                                <p style={{ fontFamily: "Times New Roman"}}>Villa 25 Mourad street off Orouba, Heliopolis، Almazah, Heliopolis, Cairo Governorate 11475</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sub-footer">
                                <label>© 2023 CANADIAN CHAMBER OF COMMERCE. ALL RIGHTS RESERVED.</label>
                            </div>
                        </div>
                    
                </div>
            </footer>
      
      </div>
                )}

    {/* <ol>
        <li>You will be asked questions one after another.</li>
        <li>1 point is awarded for the correct answer.</li>
        <li>Each question has four options. You can choose only one options.</li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
    </ol> */}

      {/* <form id="form" onSubmit={handleSubmit}>
         {/* <input ref={inputRef} className="userid" type="text" placeholder='Task Title' />  */}
         {/* <p>Choose course</p>
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

          {console.log("courseId "+option)}
         {console.log("subtitles for course " +subtitles)}
 
         <p>Choose Subtitle</p>

        <select
        // onClick={()=>getId()}
        onClick={()=>fetchSubtitles()}
        onChange={(e) => setSubtitleOption(e.target.value)
        }
        >
         <option selected disabled key="0"> Select a Subtitle</option>

         {subtitles.map((sub) => (
            <option key={sub.id} value={sub.title}> {sub} </option>
            ))}   
            <option key="1" value="option"> Final Exam </option>
        </select>  */} 

    {/* </form>   */}
    {/* <Link to={`/addTask/${option}/${subtitleOption}`} className="btn btn-primary">Start Quiz</Link> */}

    {/* <div className='start'>
        <Link onClick={handleSubmit} className='btn' to={'questions'}>Continue</Link>
    </div> */}

export default AddTaskMain