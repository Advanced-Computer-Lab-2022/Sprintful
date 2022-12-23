import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  

//const { useState } = require("react");

const EditInstructorProfile = () => {
    const [instructor, setInstructor] = useState("");
    const [email, setEmail] = useState(instructor.email);
    const [biography, setBiography] = useState(instructor.biography);
    const [password, setPassword] = useState(instructor.password);

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    useEffect(() => {
      const fetchData = async () => {
        await axios.post(`http://localhost:5000/api/instructor/editBioEmail?id=${id}`)
        
        .then((res) => {
          setInstructor(res.data);
          console.log(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
    }       
    fetchData();
    }, []);

    return (
      <div>
      <div className="InstructorProfile">
      {
        instructor && (
          <div>
           <p>
            <label>User name:</label>
            <label>{instructor.username}</label>
            </p>

        <label>Email:</label>
            <input 
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>

        <label>Biography:</label>
            <input 
            type="text"
            onChange={(e) => setBiography(e.target.value)}
            value={biography}/>
        <p>
        <label> Change Password </label>
        </p>

        <label>Current Password:</label>
            {/* <input 
            type="text"
            onChange={(e) => setBiography(e.target.value)}
            value={biography}/> */}

        <label>New Password:</label>
            <input 
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>

            </div>
        )
      }
        </div>
        </div>

    )
}
export default EditInstructorProfile;