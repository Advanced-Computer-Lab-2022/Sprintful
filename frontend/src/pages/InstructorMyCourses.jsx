import InstructorHomeNavBar  from '../components/InstructorHomeNavBar';
import PopUp from '../components/PopUp'
import React, { useState } from "react";
import {useNavigate} from "react-router";
import { useEffect } from 'react';
import axios from 'axios';

import {render} from 'react-dom';
import { fontSize } from '@mui/system';


export default function InstructorMyCourses() {
    
    const [courses,setCourses] = useState([])
    const [courses2,setCourses2] = useState([])
    const [searchTerm,setSearchTerm] = useState(null)
    const [searched,setSearched] = useState(false)
    const [filtered,setFiltered] = useState(false)


    const [filterPrice,setFilterPrice] = useState(null)
    const [filterSubject, setFilterSubject] = useState(null)
    const [filterData,setFilterData]=useState([]);

    const [add, setAdd] =useState(false)
    const [addTask, setAddTask] =useState(false)
    const [mess,setMess] = useState(false)

    const[title,setTitle]=useState('') 
    const [price ,setPrice]=useState('')
    const [totalhours,setTotalHours]=useState('')
    const [shortsummary,setShortSummary]=useState('')
    const [previewvideolink,setPreviewVideoLink]=useState('')
    const [discount,setDiscount]=useState('')
    const [subject,setSubject]=useState('Computer Science')
    // const [contract,setContract] =useState(false)

    const [instructorCourses,setInstructorCourses] = useState([])
    const [option, setOption] = useState("");
    const [subtitleOption, setSubtitleOption]= useState("");
    const [subtitles, setSubtitles] = useState([]);
    const [titleTask,setTitleTask] = useState("");
    const [subId, setSubId]=useState(null);
    const [courseRef, setCourseRef]= useState(false)
    const [task, setTask] = useState([])


    const navigate=useNavigate();
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id)

      let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
      };
    //   render(<PopUp/>)

    const handleFilter =  async(e) =>{
        e.preventDefault()
        var b = document.getElementById('subject').value  ;
        setFilterSubject(b)
        var c = document.getElementById('price').value  ;
        setFilterPrice(c)
        setFiltered(true);
        setCourses([])
    }

    const handleTaskSubmit = async (e) => {
        e.preventDefault();
        if(courseRef){
        setTask({
            title: titleTask, 
            course: subId
        })
    }
    else{
        setTask({
            title: titleTask, 
            subtitle: subId
        })
        
    }
    console.log("id in handleSubmit: "+subId)
        const response = await fetch(`http://localhost:5000/api/tasks/addTask/${subId}`,{
            method:'POST',
            body :JSON.stringify(task),
            headers :{
                'Content-Type':'application/json'
            }
           },axiosConfig)

           const json =await response.json()
           if(response.ok){
       
          const taskId=json._id;
          console.log('Task added',json)
       
           
           navigate(`/addQuestion?taskid=${taskId}`);
           navigate(0);
           }   
           else{
            console.log("fail")
           }
    }
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

    const getId = async () =>{
        console.log("option " + option )
        if(subtitleOption=="option"){
            setSubId(option)
            console.log("subId set for final exam")
            setCourseRef(true)
        }
       else{ await axios.get(`http://localhost:5000/api/courses/getSubtitleId?title=${subtitleOption}`).then(
            (res) => { 
                const subIdArr = res.data
                //console.log("1"+subId)
                //setSubtitles(courses)
                setSubId( subIdArr.reduce((acc, curr) => `${acc}${curr._id}` ,''))

                //console.log("inside "+subId)
            }
             );
    }
    console.log("sub Id " +subId)
}

    const handleSubmit= async (e)=>{
        e.preventDefault()
        const response=  axios.post(`http://localhost:5000/api/courses/addCourse?id=${id}`, { 
            title: title ,
            subject: subject,
            price: price,
            totalhours: totalhours,
            shortsummary: shortsummary,
            instructor: id,
            previewvideolink: previewvideolink,
            discount: discount
    
        },axiosConfig)
        .then(function (response) {
        console.log(response.data[0])
        console.log(response.data[1])
        setMess(true);
        // navigate(`/instructor?id=${id}`)
        // navigate(0)
        // const json = response[0].json()
        // const courseid=json._id;
        // console.log('Course added ',json)
        })
        .catch(function (error) {
        // setContract(false)
        navigate(`/contract?id=${id}`);
        navigate(0)
        console.log(error);
        })

        setTitle('')
        setPrice('')
        setSubject('Computer Science')
        setTotalHours('')
        setShortSummary('')
        setPreviewVideoLink('')
        setDiscount('')
        // if(contract){
          
        // }
        // else {
            
        // }
    
    }
    useEffect(() => {
        const response = async() =>{
            console.log("hello")
            console.log(filterSubject +" " + filterPrice)
            await axios.post(`http://localhost:5000/api/courses/instructor/filterMyCourses?id=${id}&subject=${filterSubject}&price=${filterPrice}`)
            .then((res) => { 
                const course = res.data
                if(res.status===200){
                    console.log("check success")
                    console.log("FILTER")
                    setFilterData(course)
                }
                else{
                    console.log("entered empty check")
                    setFilterData([])
                }
            })
        }
        const fetchInstructorCourses =async () =>{
            await axios.get(`http://localhost:5000/api/courses/instructor/?id=${id}`).then(
           (res) => { 
               const courses = res.data
               setInstructorCourses(courses)
               console.log(courses)

           }
            );
        }
        
        fetchInstructorCourses()

        response()
        setFilterPrice(null)
        setFilterSubject(null)

        const fetchCourses = async()=>{
            await axios.get(`http://localhost:5000/api/courses/instructor?id=${id}`,axiosConfig)
            .then((res) => {
               console.log(res.data)
               setCourses(res.data)

            })
           .catch(errors => {
               // react on errors.
               console.error(errors);
           });
        }
       axios.get(`http://localhost:5000/api/courses/instructor/search?id=${id}&searchTerm=${searchTerm}`)
       .then((res) => {
           console.log(res.data)
           setCourses2(res.data);
       })
       .catch((err) => {
           console.log(err);
       });
       fetchCourses()

       setSearchTerm(null)

    }, [searchTerm,searched,filterData,filterPrice,filterSubject,filtered]);
   
    const handleOnChange = async(e) =>{
        e.preventDefault()
        var a = document.getElementById('input').value  ;
        setSearchTerm(a)
        setSearched(true);
        setFilterData([])
        console.log(searchTerm)
    }

   const mystyle = {
        color: "white",
        backgroundColor: "#8d99af",
        padding: "10px",
        position: "relative",
        width: "130px",
        height: "40px",
        fontSize: "13px",
        position:"relative",
        left:"20px",
        top: "-230px" ,
        marginTop: "150px",
        marginRight: "50px"
    };
    const style1 = { //.create input, .create textarea, .create select
        width: "100%",
        padding: "6px 10px",
        margin: "10px 0",
        border: "1px solid #ddd",
        boxSizing: "border-box",
        display: "block",
        fontSize:"14px",
      }
     const style2 ={ // .create button
        background: "#8d99af",
        color: "#fff",
        border: "0",
        padding: "8px",
        borderRadius: "8px",
        cursor: "pointer"
      }
      const style3 ={ //  form
        position: "relative",
        left:"11px",
        top: "-10px",
        fontSize:"14px",
        borderStyle: "solid",
        borderColor : "#8d99af"
      }
      const styleFilterForm = {
        position: "relative",
        top: "-40px",
        left: "350px",
        height: "70px",
        width: "340px"
        };
    
    const styleFilterButton ={
        height: "70px",
        left:"70px"
    }
    const stylePrice ={
        width : "100px",
        fontSize: "12px",
    }
    const styleSubject ={
        width : "120px",
        fontSize: "12px",
        position: "relative",
        left:"20px"
    }
    return (
        <div>
            {/* <!-- ***** Preloader Start ***** --> */}
            <div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                    <span className="dot"></span>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Preloader End ***** --> */}

            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <InstructorHomeNavBar />
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}

            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            { 
                            <form id="search-form" name="gs" method="submit" role="search" action="#" style={{position:"relative",top:"-40px", left:"10px"}}>
                                <div className="row">
                                    <div className="col-lg-3 align-self-center">
                                        <fieldset>
                                            <input id={'input'} type="address" value={searchTerm} name="address" className="searchText" placeholder="Search my Courses by title or subject ..." autocomplete="on" required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-3">
                                        <fieldset>
                                            <button id="main-button" onClick={handleOnChange}><i className="fa fa-search"></i></button>
                                        </fieldset>
                                    </div>
                                </div>

                            </form>
                            }
                            { <form id="search-form" name="gs" method="submit" role="search" action="#"  style={styleFilterForm}>
                                <div className="row">
                                    <div className="col-lg-3 align-self-center">
                                        <fieldset>
                                            <select  id={'price'}  value={filterPrice} name="area" className="form-select" aria-label="Area"  onchange="this.form.click()" style={stylePrice}> 
                                            {/* id="chooseCategory" */}
                                            {/* assuming price range is 0-5000 */}
                                                <option selected disabled key="0" value="null"> Select a price</option> 
                                                <option key="1" value="0" >FREE </option>
                                                <option key="2" value="1000" >less than 1000</option>
                                                <option key="3" value="3000" >less than 3000</option>
                                                <option key="4" value="5000">less than 5000</option>
                                                <option key="5" value="99999999">more than 5000</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-3 align-self-center">
                                        <fieldset>
                                            <select id={'subject'} value={filterSubject} name="price" className="form-select" aria-label="Default select example" onchange="this.form.click()" style={styleSubject}>
                                                {/* id="chooseCategory" */}
                                                <option key="0" value="null" selected disabled> Select a subject</option>
                                                <option key="1" value="Computer Science">Computer Science</option>
                                                <option key="2" value="Languages">Languages</option>
                                                <option key="3" value="Physics">Physics</option>
                                                <option key="4" value="Business Administration">Business Administration</option>
                                                <option key="5" value="Mathematics">Mathematics</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-3">
                                        <fieldset>
                                            <button id="main-button" onClick={handleFilter} style={styleFilterButton}> Apply</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                            }
                        </div>
                    </div>
                </div>
            </div>   

            <div className="popular-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2 style={{fontSize: "30px", position:"relative",left:"-450px", top: "-40px"}}>My Courses</h2>
                            </div>
                            <div>
                                <button id="main-button" onClick={() => setAdd(!add)} style={mystyle}> Add a new Course</button>
                            
                                <button id="main-button" onClick={() => setAddTask(!addTask)} style={mystyle}> Add a task</button>
                            </div>

                        </div>
                        <div className="col-lg-12">
                            { filtered &&
                                <div className="card-container"  style={{position:"relative", top:"-160px"}}>
                                    {filterData  && filterData.map((course) =>( 
                                        <div className="card" onClick = { () => { navigate(`/api/courses/getCourse/${course._id}/InstructorCourse`)} }>
                                        <img src="assets/images/courseCard.jpg"/>
                                        <div className="content">
                                            <h3> {course.title} </h3>
                                            <p>totalhours: {course.totalhours}</p>
                                            <p>rating: {course.rating}</p>
                                            <p>Price: {course.price}</p>
                                        </div>
                                        </div>
                                    ))}       
                                </div>
                            }      
                            { searched &&
                                <div className="card-container" style={{position:"relative", top:"-160px"}}>
                                    {courses2  && courses2.map((course) =>( 
                                        <div className="card"  onClick = { () => { navigate(`/api/courses/getCourse/${course._id}/InstructorCourse`)} }>
                                            <img src="assets/images/courseCard.jpg"/>
                                            <div className="content">
                                                <h3> {course.title} </h3>
                                            </div>
                                        </div>

                                    ))}
  
                                </div>
                            } 
                            {/* Instructor Course view */}
                            { !searched  && !filtered &&
                            <div className="card-container" style={{position:"relative", top:"-160px"}} >
                                {courses  && courses.map((course) =>( 
                                    <div className="card"  onClick = { () => { navigate(`/api/courses/getCourse/${course._id}/InstructorCourse`)} }>
                                        <img src="assets/images/courseCard.jpg"/>
                                        <div className="content" >
                                            <h3> {course.title} </h3>
                                            <p>totalhours: {course.totalhours}</p>
                                            <p>rating: {course.rating}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            } 
                            <div className="create">
                                { add && <form onSubmit={handleSubmit} style={style3}>  
                                    {/* <h3>Add a new Course</h3> */}
                                        <label style={{fontSize:"16px"}}>Course Title</label>
                                        <input 
                                            type="text"
                                            onChange={(e)=>setTitle(e.target.value)}
                                            value={title}
                                            style= {style1}
                                            />
                                    
                                        <label style={{fontSize:"16px"}}>Price (in LE)</label>
                                        <input 
                                            type="number"
                                            onChange={(e)=>setPrice(e.target.value)}
                                            value={price}
                                            style= {style1}
                                            />
                                    
                                    <label style={{fontSize:"16px"}}>Credit Hours</label>
                                        <input 
                                            type="number"
                                            onChange={(e)=>setTotalHours(e.target.value)}
                                            value={totalhours}
                                            style= {style1}
                                            />
                                    
                                        <label style={{fontSize:"16px"}}>Short Summary</label>
                                        <input 
                                            type="text"
                                            onChange={(e)=>setShortSummary(e.target.value)}
                                            value={shortsummary}
                                            style= {style1}
                                            />

                                        <label style={{fontSize:"16px"}}>Preview video link</label>
                                        <input 
                                            type="text"
                                            onChange={(e)=>setPreviewVideoLink(e.target.value)}
                                            value={previewvideolink}
                                            style= {style1}
                                            />
                                        
                                        <label style={{fontSize:"16px"}}>Discount</label>
                                        <input 
                                            type="number"
                                            onChange={(e)=>setDiscount(e.target.value)}
                                            value={discount}
                                            style= {style1}
                                            />

                                        <label style={{fontSize:"16px"}}>Choose a Subject</label>
                                            <select value={subject}  onChange={(e)=>setSubject(e.target.value)} style= {style1}>
                                            <option style={style1} value="Languages">Languages</option>
                                            <option style={style1}  value="Computer Science">Computer Science </option>
                                            <option style={style1}  value="Physics">Physics</option>
                                            <option style={style1}  value="Business Adminstration">Business Adminstration</option>
                                            <option style={style1}  value="Mathematics">Mathematics</option>
                                            </select>
                                        <button style ={style2}>Add Subtitle</button>
        
                                        </form>
                                    }
                                    { mess && <strong style={{position:"relative", left: "25px",top: "-33px" ,marginTop: "10px", fontSize:"13px", color:"#4BB543"}}> Course added successfully!</strong>

                                    }

                                    
                            {/* </div> 
                            <div className="createTask"> */}
                           {addTask && <form id="form" onSubmit={handleTaskSubmit} style={style3}>
                                {/* <input ref={inputRef} className="userid" type="text" placeholder='Task Title' />  */}
                                <label style={{fontSize:"16px"}}>Choose course</label>
                                <select
                                    placeholder= "View Options"
                                    value={option}
                                    onChange={(e) => setOption(e.target.value)}
                                    onClick={()=>fetchSubtitles()}
                                    style= {style1}
                                > 

                                <option selected disabled key="0"> Select a course</option>
                                    {courses.map((op) => (
                                    <option key={op.id} value={op._id}> {op.title} </option>
                                    ))}  

                                

                                </select> 

                                {/* {console.log("courseId "+option)}
                                {console.log("subtitles for course " +subtitles)}
                        */}
                                <label style={{fontSize:"16px"}}>Choose Subtitle</label>

                                <select
                                // onClick={()=>getId()}
                                style= {style1}
                                onChange={(e) => setSubtitleOption(e.target.value)
                                }
                                >
                                <option selected disabled key="0"> Select a Subtitle</option>

                                {subtitles.map((sub) => (
                                    <option key={sub.id} value={sub.title}> {sub} </option>
                                    ))}   
                                    <option key="1" value="option"> Final Exam </option>
                                </select> 

                                <label style={{fontSize:"16px"}}>Task title</label>
                                <input 
                                    //id = "title"
                                    type="text"
                                    onChange={(e)=>setTitleTask(e.target.value)}
                                    onClick={()=>getId()}
                                    value={titleTask}
                                    style= {style1}
                                />
                                
                                <br/>
                                <button style ={style2}>Continue</button>

                            </form>  
}
                                </div> 
                              
                        </div>   
                    </div> 
                </div>
            </div>        
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about">
                                <div className="logo">
                                    <img src="assets/images/black-logo.png" alt="Plot Listing" />
                                </div>
                                <p>If you consider that <a rel="nofollow" href="https://templatemo.com/tm-564-plot-listing" target="_parent">Plot Listing template</a> is useful for your website, please <a rel="nofollow" href="https://www.paypal.me/templatemo" target="_blank">support us</a> a little via PayPal.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="helpful-links">
                                <h4>Helpful Links</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li><a href="#">Categories</a></li>
                                            <li><a href="#">Reviews</a></li>
                                            <li><a href="#">Listing</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Awards</a></li>
                                            <li><a href="#">Useful Sites</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-us">
                                <h4>Contact Us</h4>
                                <p>27th Street of New Town, Digital Villa</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="#">010-020-0340</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <a href="#">090-080-0760</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sub-footer">
                                <p>Copyright © 2021 Plot Listing Co., Ltd. All Rights Reserved.
                                    <br />
                                    Design: <a rel="nofollow" href="https://templatemo.com" title="CSS Templates">TemplateMo</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>






    )
}