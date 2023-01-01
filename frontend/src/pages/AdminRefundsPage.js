
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { shadows } from '@mui/system';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {StyledCourseHeader} from '../components/styles/CourseHeader.style'


const AdminRefundsPage=()=>{


return (
    <div>

<div>
             < StyledCourseHeader>
                <h5>Refunds Requests :</h5>
                </StyledCourseHeader>
             {/* {subtitle&&subtitle.tasks.map((task)=>( */}
                    
                <div key="1">
                    <Card sx={{ maxWidth: 400 ,maxHeight:60, mb:2}}  style={{boxShadow: "3"}}>
                         <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                   I am A refund
                            </Typography>
                            <br></br>
                            <br></br>
                            </CardContent>
                    </Card>
                </div>
                 
                

                   {/* ))} */}









             </div>




    </div>
)



}

export default AdminRefundsPage