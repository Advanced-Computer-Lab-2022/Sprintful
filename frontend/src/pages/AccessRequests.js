import axios from 'axios';
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";
import Alert from '@mui/material/Alert';


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
        const [clicked, setClicked] = useState(false)
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
                   setClicked(true)
               }
                );
        }
    
  return (
    <div style= {{  borderLeft: "2px solid silver",
    height: "1000px",
    //position:"absolute",
    //  left: "50%"
    borderRight: "2px solid silver",
    height: "1000px",
  }}>

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

     <hr/> 
     <br/>  

    <div style={header}>Courses' Access Requests</div>

<div className="card-container" >
                            {requests  && requests.map((request) =>( 
                                <div className="card" style={{height: "20em", cursor: "pointer"}} >
                                <div className="content">
                                    <p style={{color: "black", fontFamily: "Times New Roman"}}>Corporate Trainee Username: {request.corporateTraineeUsername}</p>
                                    <br/>
                                    <p style={{color: "black", fontFamily: "Times New Roman"}}>Course Title: {request.courseName}</p>
                                    <br/>
                                    <p style={{color: "black", fontFamily: "Times New Roman"}}>Corporate: {request.corporate}</p>
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
                                                    {clicked &&  <Alert style={{width: "300px", fontSize: "10px", color: "black"}}>
                                                    Granted access successfully!
                                                    </Alert>}
                                </div>
                                </div>
                            ))}
                            
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
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
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
export default AccessRequests