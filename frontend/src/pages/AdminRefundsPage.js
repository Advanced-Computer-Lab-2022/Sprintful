
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { shadows } from '@mui/system';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {StyledCourseHeader} from '../components/styles/CourseHeader.style'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';



const AdminRefundsPage=()=>{
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

        

    const [RefundsRequests,setRefundsRequests]=useState([]);

    

    const handleAccept=async(traineeid,courseid,refundid)=>{

        const response2=await axios.get(`http://localhost:5000/api/refund/AcceptRefund/${refundid}/`,{params:{traineeid:traineeid,courseid:courseid}})
         const allRefunds=response2.data
         setRefundsRequests(allRefunds);
    
       }

    useEffect(()=>{
        const getRefundsRequests=async()=>{

            const response=await axios.get('http://localhost:5000/api/refund/getRefundsRequests');
            const requests=response.data;
            setRefundsRequests(requests);


        }

         getRefundsRequests();


        },[])


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
     <div style={header}>Refund Requests</div>

     <div className="card-container" >
                            {RefundsRequests && RefundsRequests.map((request) =>( 
                                //  <div key={request._id}>
                                <div className="card" style={{height: "20em", cursor: "pointer"}} >
                                {/* <div className="content"> */}
                                    <p style={{color: "black", fontFamily: "Times New Roman"}}> Trainee Name: {request.traineeName}</p>
                                    <br/>
                                    <p style={{color: "black", fontFamily: "Times New Roman"}}> Course ID: {request.course}</p>
                                    <br/>
                                    <p style={{color: "black", fontFamily: "Times New Roman"}}>Refund Amount: {request.amount} L.E</p>
                                    <br/>
                                    <br/>
                                    {(() => {
                         if (request.isAccepted) {
                        return   <Typography gutterBottom variant="h6" component="div" color="primary" style={{color: "green", fontWeight: "bold", fontFamily: "Times New Roman", marginLeft: "330px"}}>
                                  Accepted
                                </Typography>
                                                     ;
                                            } 

                           else{ 
                        return   <button style={{backgroundColor:"#dc3545", 
                                  borderRadius:"3px", 
                                  color: 'white', 
                                  // padding: '15px 50px 5px 50px',
                                  float: 'right',
                                  fontSize: '10px',
                                  minHeight:"30px", 
                                  minWidth: "30px",
                                  position: "relative"}} onClick={()=>{handleAccept(request.traineeid,request.course,request._id )}}> Refund </button> 
                           }                 
                                                   })()}
                            
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
                         <div  onClick={()=> navigate(`/admin?id=${id}`)} style={{color: 'white', 
                            padding: '15px 50px 5px 50px',
                            float: 'left',
                            fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
                            </div>
                          


    </div>

//     <div>

// <div>
//              < StyledCourseHeader>
//                 <h2>Refunds Requests :</h2>
//                 </StyledCourseHeader>
//              {RefundsRequests && RefundsRequests.map((request)=>( 
                    
//                 <div key={request._id}>
//                     <Card sx={{ maxWidth: 400 ,minHeight:170, mb:2}}  style={{boxShadow: "3"}}>
//                          <CardContent>
//                             <Typography gutterBottom variant="h5" component="div">
//                                    Trainee Name :{request.traineeName}
//                             </Typography>
//                             <br></br>
//                             <Typography gutterBottom variant="h5" component="div">
//                                 Course ID:{request.course}
//                              </Typography>
//                                 <br></br>

//                             <Typography gutterBottom variant="h5" component="div">
//                                 Refund Amount :{request.amount} L.E
//                             </Typography>    

//                             <br></br>
//                             <br></br>
//                             </CardContent>
//                             <CardActions>
//                             {(() => {
//                          if (request.isAccepted) {
//                         return   <Typography gutterBottom variant="h6" component="div" color="primary">
//                                   Accepted
//                                 </Typography>
//                                                      ;
//                                             } 

//                            else{ 
//                         return   <Button onClick={()=>{handleAccept(request.traineeid,request.course,request._id )}} size="Large">
//                                    <h5>Accept</h5>
//                                  </Button>
//                            }                 
//                                                    })()}




//                               {/* <Button size="Large">
//                                 <h5>Accept</h5>
//                                 </Button>
//        */}
//                              </CardActions>
//                     </Card>
//                 </div>
                 
                

//                     ))} 









//              </div>




//     </div>
)



}

export default AdminRefundsPage