import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function MostPopular() {
  const [courses, setCourses]= useState([]) 
  const navigate = useNavigate();
  const handleClick = async () =>{
    await axios.get(`http://localhost:5000/api/courses/popular`).then(
       (res) => { 
           const courses = res.data
           //console.log(courses)
           setCourses(courses);
       }
        );
  }
  return (
    <div>
      <button onClick={()=>handleClick()}>View Most Popular</button>

      {courses && courses.map((course) => (
            <div className="card" onClick = { () => { navigate(`/api/courses/getCourse/${course._id}/guest`)} }>
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
  )
}
