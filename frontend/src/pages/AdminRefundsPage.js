
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

<div>
             < StyledCourseHeader>
                <h2>Refunds Requests :</h2>
                </StyledCourseHeader>
             {RefundsRequests && RefundsRequests.map((request)=>( 
                    
                <div key={request._id}>
                    <Card sx={{ maxWidth: 400 ,minHeight:170, mb:2}}  style={{boxShadow: "3"}}>
                         <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                   Trainee Name :{request.traineeName}
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h5" component="div">
                                Course ID:{request.course}
                             </Typography>
                                <br></br>

                            <Typography gutterBottom variant="h5" component="div">
                                Refund Amount :{request.amount} L.E
                            </Typography>    

                            <br></br>
                            <br></br>
                            </CardContent>
                            <CardActions>
                            {(() => {
                         if (request.isAccepted) {
                        return   <Typography gutterBottom variant="h6" component="div" color="primary">
                                  Accepted
                                </Typography>
                                                     ;
                                            } 

                           else{ 
                        return   <Button onClick={()=>{handleAccept(request.traineeid,request.course,request._id )}} size="Large">
                                   <h5>Accept</h5>
                                 </Button>
                           }                 
                                                   })()}




                              {/* <Button size="Large">
                                <h5>Accept</h5>
                                </Button>
       */}
                             </CardActions>
                    </Card>
                </div>
                 
                

                    ))} 









             </div>




    </div>
)



}

export default AdminRefundsPage