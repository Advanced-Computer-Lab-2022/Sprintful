import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
//const { useState } = require("react");
import {useNavigate} from "react-router";
import Alert from '@mui/material/Alert';


const ChangeAdminPassword = () => {
  const header = {
    color: "darkRed",
    fontFamily: "Times New Roman",
    fontSize: "28px",
    textAlign: "center",
    fontWeight: "bold"
    
  };
  const navigate=useNavigate();
    const [admin, setAdmin] = useState("");
    const [currentPassword, setCurrentPassword] = useState(admin.currentPassword);
    const [password, setPassword] = useState(admin.password);
    const [clicked, setClicked] = useState(false)
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    useEffect(() => {
      const fetchData = async () => {
        await axios.get(`http://localhost:5000/api/admin/profile?id=${id}`)

        .then((res) => {
          setAdmin(res.data);
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

     axios.put(`http://localhost:5000/api/admin/changePassword?id=${id}`, { //?id=${id}
        currentPassword: currentPassword,
        password: password
   },axiosConfig)

   .then(function (response) {
    setAdmin(response.data);
      console.log(response.data);
      console.log(response.data[0])
      console.log(response.data[1])
      setClicked(true)
   })
   .catch(function (error) {
     console.log(error);
   });

    }
    function myFunction() {
      var x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }

    return (
      <div style= {{  borderLeft: "2px solid silver",
      height: "1000px",
      //position:"absolute",
      //  left: "50%"
      borderRight: "2px solid silver",
      height: "1000px",
    }}>
        <div>
        <nav className="navbar navbar-default navbar-cls-top " role="navigation" style = {{marginBottom: '0', background: "silver"}}> 
            <a class="salata" data-dark-logo="/upload/logo.png" syle={{position: "relative"}}>

                                <img src="/upload/logo.png" alt="Homepage" style={{width: "140px", 
                                                                                    height: "60px",
                                                                                    marginRight: "900px"}}/>
                            </a>
         
         {/* <div className="navbar-header"> */}
             {/* <a  style={{color: 'white',
                         fontWeight: "bold", 
                         float: "left",
                         fontSize: '25px',
                         testAlign: "left"}}>Canadian Chamber of Commerce</a>  */}
         {/* </div> */}
<div  style={{color: 'white', 
          padding: '15px 50px 5px 50px',
          float: 'right',
          fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust">Logout</a> 

</div>
  </nav>
  </div>

  <hr/> 
  <br/>  
  <div style={header}>Change my Password</div>
  <br/>
  <br/>
      <div>
      <p style= {{ marginLeft: "540px", fontSize:"16px", color:"black"}}>
            <label style={{fontSize:"16px", color:"black", textAlign: "center", fontFamily: "Times New Roman"}}>User name: </label>
            <label style={{fontSize:"16px", color:"black", textAlign: "center", fontFamily: "Times New Roman"}}>{admin.username}</label>
            </p>
        <form className="create" onSubmit={handleSubmit} > 
      <div className="ChangeAdminPassword" >
         
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
                    <br/>
                    <br/>
                    <br/>
                    <br/>
        </form>
        </div>
        <div  onClick={()=> navigate(`/admin?id=${id}`)} style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'left',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
             </div>

             <br/>
                    <br/>
                    <br/>
                    <br/>

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
export default ChangeAdminPassword;