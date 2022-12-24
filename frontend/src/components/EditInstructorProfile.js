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

    const handleSubmit = async(e) => {
        e.preventDefault()

       let axiosConfig = {
         headers: {
             'Content-Type': 'application/json;charset=UTF-8',
             "Access-Control-Allow-Origin": "*",
         }
       };

     axios.put(`http://localhost:5000/api/instructor/editBioEmail?id=${id}`, { //?id=${id}
        email: email,
        biography: biography,
        password: password
   },axiosConfig)

   .then(function (response) {
        setInstructor(response.data);
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
      <div className="EditInstructorProfile">
      {
         (
          <div>
           <p>
            <label>User name: </label>
            <label>{instructor.username}</label>
            </p>

        <label>Email: </label>
            <input style= {{width: "20em"}}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>
            <br/>

        <label>Biography: </label>
            <input style= {{width: "20em", height: "6em"}} 
            type="text"
            onChange={(e) => setBiography(e.target.value)}
            value={biography}/>
            <br/>
        <p>
        <label> Change Password </label>
        </p>
        <br/>

        <label>Current Password: </label>
            {/* <input 
            type="text"
            onChange={(e) => setBiography(e.target.value)}
            value={biography}/> */}
            <br/>

        <label>New Password: </label>
            <input style = {{width: "10em"}}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>

            </div>
        )
      }
        </div>
            <button> Apply </button>
        </form>
        </div>

    )
}
export default EditInstructorProfile;