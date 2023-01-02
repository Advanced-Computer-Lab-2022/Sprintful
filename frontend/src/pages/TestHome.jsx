import React, { useState } from "react";
import {Navigate, useNavigate} from "react-router";
import { useEffect } from 'react';
import axios from 'axios';
import "../pages/testStyle.css"


export default function TestHome() {


return(
    <div>

    <div id="topbar" class="">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 p-0 text-center">
                            <ul class="top-menu">
                                <li><a href="tel:+201001004070">Phone:
                                        +201001004070</a></li>
                                <li><a href="mailto:info@cancham.org.eg">Email:
                                        info@cancham.org.eg</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 hidden-sm hidden-xs">
                            <div class="social-icons social-icons-colored-hover">
                                <ul>
                                    <li class="social-facebook"><a href="https://www.facebook.com/CanCham/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li class="social-twitter"><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                    <li class="social-youtube"><a href="https://www.youtube.com/channel/UC1ykoFKsMjVQCx3TeLIXDbg" target="_blank"><i class="fa fa-youtube"></i></a></li>
                                    <li class="social-gplus"><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="social-linkedin"><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            





            
<header id="header" class="">
                <div id="header-wrap">
                    <div class="container">
                        <div id="logo" style={{right: "100px"}}>
                            <a class="logo" data-dark-logo="/upload/logo.png" syle={{position: "relative",
                                                                                    right: "100px"}}>

                                <img src="/upload/logo.png" alt="Homepage" style={{width: "120px", 
                                                                                    height: "50px",
                                                                                    right: "100px"}}/>
                            </a>
                        </div>

                        <div id="mainMenu-trigger">
                            <button class="lines-button x"> <span class="lines"></span> </button>
                        </div>
 
                        <div id="mainMenu" class="light">
                            <div class="container">
                                <nav>
    <ul>
        <li><a href="https://cancham.org.eg/">Home</a></li>
        <li class="dropdown"><a href="#">Canadian Chamber</a>
            <ul class="dropdown-menu">
                <li><a href="https://cancham.org.eg/en/about_us.html">About Us</a></li>
                <li><a href="https://cancham.org.eg/en/services.html">Services</a></li>
                <li><a href="https://cancham.org.eg/en/letter_chairman.html">Letter From The Chairman</a></li>
            </ul>
        </li>
        <li><a href="https://cancham.org.eg/en/membership.html">Membership</a></li>
        <li class="dropdown">
            <a href="https://cancham.org.eg/en/training.html">Training</a>
            <ul class="dropdown-menu">
                <li><a href="https://cancham.org.eg/en/training.html">Training</a></li>
                <li><a href="https://cancham.org.eg/en/public_calendar.html">Course Schedule</a></li>
            </ul>
        </li>
        <li><a href="https://cancham.org.eg/en/events.html">Events</a></li>
        <li><a href="https://cancham.org.eg/en/blogs.html">Blogs</a></li>
    </ul>
</nav>                          </div>
                        </div>
                       
                    </div>
                </div>
            </header>


            </div>
            
)



}