import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import CountryCom from './CountryCom';
import InstructorProfileDropdownMenu from './InstructorProfileDropdownMenu'
import {useNavigate} from "react-router";

const InstructorHomeNavBar = () => {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const handleOnClick = async(e) =>{
        e.preventDefault()
        axios.get(`http://localhost:5000/api/instructor/logout`)
        .then((res) => {
          navigate('/');
          navigate(0);
        })
        .catch((err) => {
          console.log(err);
      });
    
    }

    return (
        <nav className="main-nav" style={{background: "white", height: "30px"}}>
            <br/>
            {/* <!-- ***** Logo Start ***** --> */}
            <div id="salata" style={{right: "100px"}}>
            <ul className="nav" style={{width: "1360px"}}>
                            <a class="salata" data-dark-logo="/upload/logo.png" syle={{position: "relative",
                                                                                    right: "100px"}}>

                                <img src="/upload/logo.png" alt="Homepage" style={{width: "140px", 
                                                                                    height: "60px",
                                                                                    right: "100px"}}/>
                            </a>
                 <li></li>     
                 <li></li>   
                 <li></li>       

                <li><a onClick={()=>window.location.href =`/individual?id=${id}`} style= {{color: "black", left: "400px",  marginTop:-2, fontFamily: "Times New Roman"}}>Home</a></li>
                <CountryCom />
                <li><a onClick={() => window.location.href = `/MyEnrolledCourses?id=${id}`} style= {{color: "black", left: "400px",  marginTop:-2, fontFamily: "Times New Roman"}}>My Courses</a></li>
                <li></li>   
                 <li></li>
                 <li></li>   
                 <li></li>
                 <li></li>   
                 <li></li>
                <li style={{color: 'white', 
                marginTop: "-4px", 
                height: "7px",
                fontSize: '10px'}}>
               &nbsp; <a className="btn btn-danger square-btn-adjust" onClick={handleOnClick}>Logout</a> 
    
   
                </li>
             
            </ul>
            </div>
        </nav>
    )
}
export default InstructorHomeNavBar;