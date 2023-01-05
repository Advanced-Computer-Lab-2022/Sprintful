import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
//const { useState } = require("react");
import {useNavigate} from "react-router";
import IndividualTraineesNavBarCom from '../components/IndividualTraineesNavBarCom';
import Alert from '@mui/material/Alert';

const ChangeIndividualTraineePassword = () => {
    const header = {
        color: "darkRed",
        fontFamily: "Times New Roman",
        fontSize: "28px",
        textAlign: "center",
        fontWeight: "bold"
        
      };
      const navigate=useNavigate();
    const [individualTrainee, setIndividualTrainee] = useState("");
    const [currentPassword, setCurrentPassword] = useState(individualTrainee.currentPassword);
    const [password, setPassword] = useState(individualTrainee.password);
    const [clicked, setClicked] = useState(false)
    const [errored, setErrored] = useState(false)

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    useEffect(() => {
      const fetchData = async () => {
        await axios.get(`http://localhost:5000/api/individualTrainee/profile?id=${id}`)

        .then((res) => {
          setIndividualTrainee(res.data);
          console.log(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
    }       
    fetchData();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(e);

       let axiosConfig = {
         headers: {
             'Content-Type': 'application/json;charset=UTF-8',
             "Access-Control-Allow-Origin": "*",
         }
       };

     axios.put(`http://localhost:5000/api/individualTrainee/changePassword?id=${id}`, { //?id=${id}
        currentPassword: currentPassword,
        password: password
   },axiosConfig)

   .then(function (response) {
    setIndividualTrainee(response.data);
      console.log(response.data);
      console.log(response.data[0])
      console.log(response.data[1])
      setClicked(true)
   })
   .catch(function (error) {
    setErrored(true)
     console.log(error);

   });

    }

    return (
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
         
         {/* <!-- ***** Header Area Start ***** --> */}
         <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
             <div className="container">
                 <div className="row">
                  <div className="col-12" style={{height: "50px"}}>
                         <IndividualTraineesNavBarCom />
                     </div>
                    
                 </div>
               
             </div>
         </header>
           <hr/>
         {/* <!-- ***** Header Area End ***** --> */}
         <div className="main-banner">
         <div id="page-wrapper" style={{width: "1200px", height: "800px",left: "100px", margin: 70, background: "#DCDCDC",marginTop:"-200px"}} >
          <br/>
          <div id="page-inner" style={{width: "1100px", height: "700px", margin: 40, background: "white"}}>
             <br/>
             <div className="container" >
               
                <div style={header}>Change my Password</div>
                <br/>
  <br/>
      <div>
      <p style= {{ marginLeft: "540px", fontSize:"16px", color:"black"}}>
            <label style={{fontSize:"16px", color:"black", marginLeft: "-135px", fontFamily: "Times New Roman"}}>User name: </label>
            <label style={{fontSize:"16px", color:"black", textAlign: "center", fontFamily: "Times New Roman"}}>{individualTrainee.username}</label>
            </p>
        <form className="create" onSubmit={handleSubmit}> 
      <div className="ChangeIndividualTraineePassword">
         
          <div>


          <br/>

<label style={{color: "black", fontFamily: "Times New Roman"}}>Current Password: </label>
     <input style = {{ //.create input, .create textarea, .create select
            padding: "6px 10px",
            margin: "10px 0",
            border: "1px solid #ddd",
            boxSizing: "border-box",
            display: "block",
            fontSize:"14px",
           }}
    type="text"
    onChange={(e) => setCurrentPassword(e.target.value)}
    value={currentPassword}
    required/> 
    <br/>

<label style={{color: "black", fontFamily: "Times New Roman"}}>New Password: </label>
    <input style = {{ //.create input, .create textarea, .create select
            padding: "6px 10px",
            margin: "10px 0",
            border: "1px solid #ddd",
            boxSizing: "border-box",
            display: "block",
            fontSize:"14px",
           }}
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required/>
   
    </div>


    </div>
        <br/>
        <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    minWidth: "50px",
                                                    position: "relative",
                                                    left: "200px"}}> Apply </button> 
                     {clicked &&  <Alert style={{width: "300px", fontSize: "10px", color: "black"}}>
                        Your password has been updated successfully!
                        </Alert>}
                        {errored &&  <Alert variant="outlined" severity="error">
                        Wrong Password!
                                </Alert>}     
                    <br/>
                    <br/>
                    <br/>
                    <br/>
        </form>
        </div>
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

        <div  onClick={()=> navigate(`/api/individualTrainee/getProfile?id=${id}`)} style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'left',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
             </div>
        </div>
        </div>
        
        </div>
        </div>
        <footer style={{height: "100px"}}>
                <div className="container" style={{height: "20px"}}>
                    <div className="row">
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
                </div>
            </footer>
        </div>


    )
}
export default ChangeIndividualTraineePassword;