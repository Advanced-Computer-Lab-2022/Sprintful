import axios from 'axios';
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";



const AccessRequests = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);
    
        const header = {
          color: "darkRed",
          fontFamily: "Times New Roman",
          fontSize: "28px",
          textAlign: "center",
          fontWeight: "bold",
          
        };

        const navigate=useNavigate();

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

     <hr/> 
     <br/>  

    {/* <div style={{backgroundColor: "#999DA0", padding: "20px"}}>
    <div style={header}> Courses' Access Requests </div>

    </div> */}
    <div style={header}>Courses' Access Requests</div>

<div className="card-container" >
                            {requests  && requests.map((request) =>( 
                                <div className="card" style={{height: "20em", cursor: "pointer"}} >
                                <div className="content">
                                    <p style={{color: "black"}}>Corporate Trainee Username: {request.corporateTraineeUsername}</p>
                                    <br/>
                                    <p style={{color: "black"}}>Course Title: {request.courseName}</p>
                                    <br/>
                                    <p style={{color: "black"}}>Corporate: {request.corporate}</p>
                                    <br/>
                                    <br/>
                                    <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'right',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    minWidth: "80px",
                                                    position: "relative"}} onClick={() => grantAccess(request._id)}> Grant Access </button> 
                                </div>
                                </div>
                            ))}
                            
                         </div>
    </div>
  )
}
export default AccessRequests