import React, { useState } from "react";
import {Navigate, useNavigate} from "react-router";
import { useEffect } from 'react';
import axios from 'axios';
import "../pages/Signup.css"
import HomeNavBar from "../components/HomeNavBar";

export default function TestLogin() {
const [isHovering, setIsHovering] = useState(false);
const handleMouseEnter = () => {
  setIsHovering(true);
};
const handleMouseLeave = () => {
  setIsHovering(false);
};
const navigate=useNavigate();

const[username,setUsername]=useState('') 
const [password ,setPassword]=useState('')
const [display,setDisplay]=useState(false)
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};
const handleSubmit= async (e)=>{
    e.preventDefault()
    let role;
    let id;
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
    axios.post('http://localhost:5000/api/guest/login',
  {
    username: username,
    password: password
  }, axiosConfig)

  .then((res) => {
      console.log(res.data.role)
      role = res.data.role
      id = res.data._id
      if(role =="Corporate"){
        navigate(`/corporate?id=${id}`)
        navigate(0)
      }
      else if(role =="Instructor"){
        if(res.data.policy== false){
          navigate(`/PaymentPolicyInstructor?id=${id}`)
          navigate(0)
        }
        else{
          navigate(`/instructor?id=${id}`)
          navigate(0)
        }
      }
      else if(role =="Individual"){
        navigate(`/individual?id=${id}`)
        navigate(0)
      }
      else{
        navigate(`/admin?id=${id}`)
        navigate(0)
      }
  })
  .catch((err) => {
      console.log(err);
  });
  console.log(username)
  console.log(password)
  
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

            <div id="page-wrapper" style={{width: "1200px", left: "100px", margin: 70, background: "#DCDCDC" ,marginTop:"-200px"}} >
        <br/>
            <div id="page-inner" style={{width: "1100px", margin: 20}}>
                <br/>
    <body className="main"  >
    <form className="signup" onSubmit={handleSubmit} autoComplete="off" style={{boxShadow: "5px 10px 8px #888888"}}>
    <h1 className="CreateAccount">Login</h1>

    <div  className="signup__field">
      <input  className="signup__input" style={style10} type="text" onChange={(e)=>setUsername(e.target.value)} value={username} name="username" id="username" required />
      <label className="signup__label" htmlFor="username">Username</label>
    </div>
    <div  className="pass">
      <input className="pass2" type="password" style={style10} onChange={(e)=>setPassword(e.target.value)} value={password}  name="password" id="username" required />
      <label className="signup__label" htmlFor="password">Password</label>
    </div>
     
    <button className="sign" style={style13} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Login</button> 
    <label style={{display:"block",textDecoration:"Underline",alignSelf:"center"}} onClick={() => navigate(`/forgotPassword`)}>forgot password?</label>
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