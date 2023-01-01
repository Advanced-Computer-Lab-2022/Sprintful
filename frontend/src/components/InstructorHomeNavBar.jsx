import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Country from './Country';
import InstructorProfileDropdownMenu from './InstructorProfileDropdownMenu'
import {useNavigate} from "react-router";

const InstructorHomeNavBar = () => {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    return (
        <nav className="main-nav" style={{background: "white", height: "20px"}}>
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
                 <li></li>   
                 <li></li>   
                 <li></li>
                 <li></li>   
                 <li></li>
                 <li></li>   
                 <li></li>      

                <li><a onClick={()=>window.location.href =`/instructor?id=${id}`} style= {{color: "black", left: "400px",  marginTop:8, fontFamily: "Times New Roman"}}>Home</a></li>
                <Country />
                <li><a onClick={() => window.location.href = `/MyTaughtCourses?id=${id}`} style= {{color: "black", left: "400px",  marginTop:8, fontFamily: "Times New Roman"}}>My Courses</a></li>
                <InstructorProfileDropdownMenu />
             
            </ul>
            </div>
        </nav>
    )
}
export default InstructorHomeNavBar;