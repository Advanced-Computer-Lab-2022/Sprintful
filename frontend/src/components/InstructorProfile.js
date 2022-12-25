import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

//const { useState } = require("react");
const InstructorProfile = () => {
    const [instructor, setInstructor] = useState("");
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        await axios.get(`http://localhost:5000/api/instructor/profile?id=${id}`)
        
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
            <label>Username:</label>
            <label>{instructor.username}</label>
            </p>

            <p>
            <label>First name:</label>
            <label>{instructor.firstName}</label>
            </p>

            <p>
            <label>Last name:</label>
            <label>{instructor.lastName}</label>
            </p>

            <p>
            <label>Email:</label>
            <label>{instructor.email}</label>
            </p>

            <p>
            <label>Biography:</label>
            <label>{instructor.biography}</label>
            </p>
            <p>
            <label>Rating:</label>
            <label>{instructor.rating}</label>
            </p>
            <p>
            <label>Reviews:</label>
            <label>{instructor.reviews}</label>
            </p>
            </div>
        )
      }
        </div>
        <br/>
        <button style={{width: "50px"}} onClick={()=> navigate(`/api/instructor/editProfile?id=${id}`)}>Edit Profile</button>
        </div>

    )
}
export default InstructorProfile;