import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import CountryGuest from '../components/CountryGuest';
import MostPopular from './MostPopular';
import { useNavigate } from "react-router-dom";


const HomeNavBar = () => {
    const navigate = useNavigate();
    const[popular, setPopular] = useState(false);
    const [courses, setCourses] = useState([]);
    const handleHome = () => {
        console.log("handled home")
        navigate(`/`)
    }

    const handlePopularClick = async () =>{
        await axios.get(`http://localhost:5000/api/courses/popular`).then(
           (res) => { 
               const courses = res.data
               //console.log(courses)
               if(courses){
               setCourses(courses);
                setPopular(true);
               }
           }
            );
      }

    return (
        <div>
            
        <nav className="main-nav" style={{background: "white", height: "20px"}}>
            {/* <!-- ***** Logo Start ***** --> */}
            {/* <a class="logo" data-dark-logo="/upload/logo.png"></a> */}
            
            <br/>
            <div id="salata" style={{right: "100px"}}>
            <ul className="nav" style={{width: "1360px"}}>
                            <a class="salata" data-dark-logo="/upload/logo.png" syle={{position: "relative",
                                                                                    right: "100px"}}>

                                <img src="/upload/logo.png" alt="Homepage" style={{width: "140px", 
                                                                                    height: "60px",
                                                                                    right: "100px"}}/>
                            </a>
                      
           
                <li onClick={()=>handleHome()}><a onClick={()=>handleHome()} style= {{color: "black", background:"white"}} >Home</a></li>
                <CountryGuest />
                <li></li>
                <MostPopular/>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                
            {/* <label style={{color:"maroon", marginLeft:"10px", marginBottom:"50px"}}>Courses</label>      */}
            </li>           
                <li><a href="/Logme"  style= {{color: "black", left: "15px"}}>Log in</a></li>
                <li><a href="/Signup"  style= {{color: "black", left: "15px"}}>Sign up</a></li>
                <li></li>

            </ul>
          
            </div>
   
        </nav>
        </div>
    )
}

export default HomeNavBar;