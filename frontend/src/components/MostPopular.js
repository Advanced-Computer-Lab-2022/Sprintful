import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function MostPopular() {
  //const [courses, setCourses]= useState([]) 
  const navigate = useNavigate();
  const handleClick = async () =>{
    // await axios.get(`http://localhost:5000/api/courses/popular`).then(
    //    (res) => { 
    //        const courses = res.data
    //        //console.log(courses)
    //        if(courses){
    //        setCourses(courses);
           navigate(`/api/courses/popular`)
           //}
       //}
        //);
  }
  return (
    <div>
      <button onClick={()=>handleClick()}>
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946432.png" alt="avatar"
                     className="rounded-circle img-fluid" style={{width: "25px", height: "25px", float: "left", left: "400px", marginTop:"17px"}}/>
            </button>
            <label style={{color:"maroon", marginLeft:"10px", marginBottom:"50px"}}>Courses</label>
      {/* <button onClick={()=>handleClick()}>View Most Popular</button> */}
<div>
      {/* {courses && courses.map((course) => (
            <div className="card" style={{height:"300px", width:"300px"}}onClick = { () => { navigate(`/api/courses/getCourse/${course._id}/guest`)} }>
            <img src="assets/images/courseCard.jpg"/>
            <div className="content">
                <h3> {course.title} </h3>
                <p>totalhours: {course.totalhours}</p>
                <p>rating: {course.rating}</p>
                <p>Price: {course.price}</p>
            </div>
            <br/>
            </div>
            ))}    */}
    </div>
    </div>
  )
}
