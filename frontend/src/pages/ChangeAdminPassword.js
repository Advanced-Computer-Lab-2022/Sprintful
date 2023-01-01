import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
//const { useState } = require("react");
import {useNavigate} from "react-router";


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
      <div>
        <div>
      <nav className="navbar navbar-default navbar-cls-top " role="navigation" style = {{marginBottom: '0'}}> 
         
      {/* <div className="navbar-header"> */}
          <a  style={{color: 'white',
                      fontWeight: "bold", 
                      float: "left",
                      fontSize: '25px',
                      testAlign: "left"}}>Canadian Chamber of Commerce</a> 
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
            <label style={{fontSize:"16px", color:"black", textAlign: "center"}}>User name: </label>
            <label style={{fontSize:"16px", color:"black", textAlign: "center"}}>{admin.username}</label>
            </p>
        <form className="create" onSubmit={handleSubmit}> 
      <div className="ChangeAdminPassword">
         
          <div>
        <br/>

        <label>Current Password: </label>
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

        <label>New Password: </label>
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
        </div>

    )
}
export default ChangeAdminPassword;