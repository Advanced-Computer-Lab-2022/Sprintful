import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Country from './Country';
import IndividualProfileDropdownMenu from './IndividualProfileDropdownMenu';
import {useNavigate} from "react-router";
import MostPopular from "./MostPopular";

const IndividualTraineeHomeNavBar = () => {
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
                          
                  
                      

                <li><a onClick={()=>window.location.href =`/individual?id=${id}`} style= {{color: "black",  fontFamily: "Times New Roman"}}>Home</a></li>
                <Country />
                {/* <li><a href=""  style= {{color: "black", left: "400px",  fontFamily: "Times New Roman"}}>Contact Us</a></li> */}
                <li><a onClick={() => window.location.href = `/MyEnrolledCourses?id=${id}`} style= {{color: "black",  fontFamily: "Times New Roman"}}>My Courses</a></li>
                 <MostPopular/>
                <li></li>     
                 <li></li>   
                 <li></li> 
                 <li></li> 
                 <li></li> 
                 <li></li>
                 <li></li> 
                
                  
                <IndividualProfileDropdownMenu />
             
            </ul>
            </div>
        </nav>
    )
}

export default IndividualTraineeHomeNavBar;