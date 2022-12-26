import axios from 'axios';
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";



const AccessRequests = () => {

        const header = {
          color: "#911E04",
          fontSize: "30px",
          textAlign: "center",
        };

        const [requests, setRequests] = useState([])  
        useEffect( ()=>{
            const fetchRequests =async () =>{
                await axios.get('http://localhost:5000/api/requestAccess/getRequestAccess').then(
               (res) => { 
                   const requests = res.data
                   console.log(requests)
                   setRequests(requests)
               }
                );
            }
            fetchRequests()
        }, [])

        const grantAccess = async(e) => {
            console.log(e)
            await axios.post(`http://localhost:5000/api/requestAccess/grantAccess?id=${e}`).then(
               (res) => { 
                   const request = res.data
                   console.log(request)
               }
                );
        }
    
  return (
    <div>

    <div style={{backgroundColor: "#999DA0", padding: "20px"}}>
    <div style={header}> Courses' Access Requests </div>

    </div>

<div className="card-container" >
                            {requests  && requests.map((request) =>( 
                                <div className="card" style={{height: "12em"}} >
                                <div className="content">
                                    <h3> {request.subject} </h3>
                                    <p>Corporate Trainee Username: {request.corporateTraineeUsername}</p>
                                    <p>Course Title: {request.courseName}</p>
                                    <button onClick={() => grantAccess(request._id)}> Grant Access </button> 
                                </div>
                                </div>
                            ))}
                            
                         </div>
    </div>
  )
}
export default AccessRequests