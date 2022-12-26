import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
//const { useState } = require("react");
const ChangeCorporateTraineePassword = () => {
    const [corporateTrainee, setCorporateTrainee] = useState("");
    const [currentPassword, setCurrentPassword] = useState(corporateTrainee.currentPassword);
    const [password, setPassword] = useState(corporateTrainee.password);
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    useEffect(() => {
      const fetchData = async () => {
        await axios.get(`http://localhost:5000/api/corporateTrainee/profile?id=${id}`)

        .then((res) => {
            setCorporateTrainee(res.data);
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

     axios.put(`http://localhost:5000/api/corporateTrainee/changePassword?id=${id}`, { //?id=${id}
        currentPassword: currentPassword,
        password: password
   },axiosConfig)

   .then(function (response) {
    setCorporateTrainee(response.data);
      console.log(response.data);
      console.log(response.data[0])
      console.log(response.data[1])
   })
   .catch(function (error) {
     console.log(error);
   });

    }

    return (
      <div>
        <form onSubmit={handleSubmit}> 
      <div className="ChangeCorporateTraineePassword">
         
          <div>
           <p>
            <label style={{fontSize:"16px"}}>User name: </label>
            <label style={{fontSize:"16px"}}>{corporateTrainee.username}</label>
            </p>
        <p>
        <label> Change Password </label>
        </p>
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
            value={currentPassword}/> 
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
                  value={password}/>
           
            </div>
      
        </div>
        <br/>
            <button style={{width: "50px"}}> Apply </button>
        </form>
        </div>

    )
}
export default ChangeCorporateTraineePassword;