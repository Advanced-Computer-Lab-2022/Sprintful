import React, { useState } from "react";
import {Navigate, useNavigate} from "react-router";
import { useEffect } from 'react';
import axios from 'axios';
import "../pages/Signup.css"
import HomeNavBar from "../components/HomeNavBar";

export default function Signup() {
const [isHovering, setIsHovering] = useState(false);
const handleMouseEnter = () => {
  setIsHovering(true);
};
const handleMouseLeave = () => {
  setIsHovering(false);
};
const navigate=useNavigate();

const[username,setUsername]=useState('') 
const [email ,setEmail]=useState('')
const [password,setPassword]=useState('')
const [firstName,setFirstName]=useState('')
const[lastName,setLastName]=useState('')
const [gender,setGender]=useState(null)
const [chekced,setChecked]=useState(false)
const [display,setDisplay]=useState(false)
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};
const handleSubmit= async (e)=>{
    e.preventDefault()
    if(chekced){
      console.log(gender)
      const response=  axios.post(`http://localhost:5000/api/guest/signUp`, { 
          username: username ,
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          gender: gender,
      },axiosConfig)
      .then(function (response) {
          navigate('/Logme')
      })
      .catch(function (error) {
      console.log(error);
      })

      setUsername('')
      setPassword('')
      setEmail('')
      setFirstName('')
      setLastName('')
      setGender('')
    }
    else{
      setDisplay(true);
    }

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
    <body className="main" >
    <form className="signup" onSubmit={handleSubmit} autoComplete="off" style={{boxShadow: "5px 10px 8px #888888"}}>
    <h1 className="CreateAccount">Create account</h1>
    <h2 className="HaveAnAccount" >Already have an account? <span onClick={() => navigate('/logme')}>Sign in</span></h2>
    <div  className="signup__field">
      <input  className="signup__input" style={style10} type="text" onChange={(e)=>setUsername(e.target.value)} value={username} name="username" id="username" required />
      <label className="signup__label" htmlFor="username">Username</label>
    </div>
    <div  className="signup__field">
      <input className="signup__input" style={style10}  type="text" onChange={(e)=>setEmail(e.target.value)} value={email} name="email" id="email" required />
      <label className="signup__label" htmlFor="email">Email</label>
    </div>
    <div  className="pass">
      <input className="pass2" type="password" style={style10} onChange={(e)=>setPassword(e.target.value)} value={password}  name="password" id="username" required />
      <label className="signup__label" htmlFor="password">Password</label>
    </div>
    <div  className="signup__field">
      <input className="signup__input" style={style10} onChange={(e)=>setFirstName(e.target.value)} value={firstName} type="text" name="First Name" id="email" required />
      <label className="signup__label" htmlFor="First Name">First Name</label>
    </div>
    <div  className="signup__field">
      <input  className="signup__input" style={style10} onChange={(e)=>setLastName(e.target.value)} value={lastName} type="text" name="Last Name" id="email" required />
      <label  className="signup__label" htmlFor="Last Name">Last Name</label>
    </div>
    <div  className="s">
      <label className="signup__label" style={{position:"relative", top:"-10px"}}htmlFor="gender"> Gender</label>
      <div class="custom02">
          <input type="radio" onChange={(e)=>setGender('female')} id="radio03-01" name="demo03" /><label for="radio03-01">Female</label>
          <input type="radio" onChange={(e)=>setGender('male')}id="radio03-02" name="demo03" /><label for="radio03-02">Male</label>
      </div>
    </div>
      <div className="new">
        <form>
          <div className="form-group">
            <input type="checkbox" id="terms of use" onChange={() => setChecked(!chekced)}/>
            <label className="paymentLabel" for="terms of use">I hereby agree to the <span className="terms" onClick={() => navigate('/policy')}>terms of use</span> </label>
          </div>
        </form>
      </div>  
      {
        display && <p style={{fontSize:"12px",color:"red",whiteSpace: "nowrap", position:"relative", top:"-60px"}}>Accepting terms of use is required</p>
      }
    <button className="sign" style={style13} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Sign up</button> 
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
  <div  onClick={()=> navigate(`/`)} style={{color: 'white', 
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