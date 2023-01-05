import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Country from './Country';
import CorporateProfileDropdownMenu from './CorporateProfileDropdownMenu';
import {useNavigate} from "react-router";
import MostPopular from "./MostPopular";

const CorporateTraineeHomeNavBar = () => {
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
                      
              
                  

            <li><a onClick={()=> navigate(`/corporate?id=${id}`)} style= {{color: "black",  fontFamily: "Times New Roman"}}>Home</a></li>
            <Country />
            <li><a onClick={() => navigate(`/MyCourses?id=${id}`)} style= {{color: "black",  fontFamily: "Times New Roman"}}>My Courses</a></li>
             <MostPopular/>
            <li></li>     
             <li></li>   
             <li></li> 
             <li></li> 
             <li></li> 
             <li></li>
             <li></li> 
            
              
            <CorporateProfileDropdownMenu />
         
        </ul>
        </div>
    </nav>

    )
}

export default CorporateTraineeHomeNavBar;