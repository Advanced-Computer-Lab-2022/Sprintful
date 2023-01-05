import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import HomeNavBar from './HomeNavBar'
import InstructorHomeNavBar from './InstructorHomeNavBar'

export default function PopularResults() {
    const [courses, setCourses]= useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchPopular = async () => {
        await axios.get(`http://localhost:5000/api/courses/popular`).then(
       (res) => { 
           const courses = res.data
           //console.log(courses)
           if(courses){
           setCourses(courses);
           }
       }
        );
    }
    fetchPopular()
    }, [])


    
  return (
    <div>
        <div>
        {/* <InstructorHomeNavBar/> */}
        </div>
        {courses && courses.map((course) => (
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
                        ))}   


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


  )
}
