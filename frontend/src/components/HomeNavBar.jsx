import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import CountryGuest from '../components/CountryGuest';

const HomeNavBar = () => {

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
                      
           
                <li><a href="/home" style= {{color: "black", left: "400px", background:"white"}} >Home</a></li>
                <CountryGuest />
                <li><a href=""  style= {{color: "black", left: "400px"}}>Contact Us</a></li>
                <li><a href="/logme"  style= {{color: "black", left: "400px"}}>Log in</a></li>
                <li><a href="/Signup"  style= {{color: "black", left: "400px"}}>Sign up</a></li>
                <li></li>

            </ul>
          
            </div>
   
        </nav>
        </div>
    )
}

export default HomeNavBar;