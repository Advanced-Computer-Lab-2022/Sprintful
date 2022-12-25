import React, { useState } from "react";
import {Navigate, useNavigate} from "react-router";
import { useEffect } from 'react';
import axios from 'axios';
import "../pages/Signup.css"

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
          navigate('/Login')
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
    padding: "0",
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
    <body className="main" >
    <form className="signup" onSubmit={handleSubmit} autoComplete="off">
    <h1 >Create account</h1>
    <h2 >Already have an account? <span>Sign in</span></h2>
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
)
}