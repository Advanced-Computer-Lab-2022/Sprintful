import React, { useState } from "react";
import {Navigate, useNavigate} from "react-router";
import { useEffect } from 'react';
import axios from 'axios';
import "../pages/Signup.css"
import HomeNavBar from "../components/HomeNavBar";




export default function ForgotPassword() {
const [isHovering, setIsHovering] = useState(false);
const handleMouseEnter = () => {
  setIsHovering(true);
};
const handleMouseLeave = () => {
  setIsHovering(false);
};
const navigate=useNavigate();

const[email, setEmail]=useState("");
const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log(email)
    fetch("http://localhost:5000/api/guest/forgotPassword",{
        method:"POST",
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*",
    }, 
    body: JSON.stringify({email:email})
    }).then(res=>res.json())
    .then(data=>{
        console.log(data, "userRegister");
    }
    );
}

const style10 ={ //.signup__input
    border: "0",
    outline: "none",
    outlineOffset: "0",
    width: "100%",
    borderBottom: "2px solid #e0e0e0",
}

const style13={ //button
    margin: "0",
    //padding: "0",
    boxSizing: "border-box",
    fontFamily: "Poppins, sansSerif",
    background: "#a4243b",
    color: "white",
    padding: "12px 0",
    fontSize: "1.7rem",
    borderRadius: "25px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    backgroundColor: isHovering ? ' #4b111b' : '#a4243b',
}

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
            <br/>
            <br/>
            <br/>
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12" style={{height: "50px"}}>
                            <HomeNavBar />
                            <hr/>
                        </div>
                    </div>
                </div>
            </header>
            <hr/>
            {/* <!-- ***** Header Area End ***** --> */}

            <div id="page-wrapper" style={{width: "1200px", left: "100px", margin: 70, background: "#DCDCDC"}} >
        <br/>
            <div id="page-inner" style={{width: "1100px", margin: 20}}>
                <br/>
    <body className="main"  >
    <form className="signup" onSubmit={handleSubmit} autoComplete="off" style={{boxShadow: "5px 10px 8px #888888"}}>
    <h1 className="CreateAccount">Forgot Password</h1>
<br/>
    <div  className="pass">
      <input className="pass2" type="email" style={style10} onChange={(e)=>setEmail(e.target.value)} value={email}  name="email" id="username" required />
      <label className="signup__label" htmlFor="password">Email address</label>
    </div>


    <button className="sign" style={style13} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Submit</button> 

  </form>


  </body>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <div onClick={()=> navigate(`/`)} style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'left',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
    </div>
  </div>
  </div>

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