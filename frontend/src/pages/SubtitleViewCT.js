import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { shadows } from '@mui/system';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';



//Stylings
import {StyledCourseHeader} from '../components/styles/CourseHeader.style'

export default function SubtitleViewCT() {
      //states
    const  [subtitle,setSubtitle]=useState(null);

    //subtitle_id
    const subtitleid=useParams().subtitleid;
    //traineeid
    const traineeid=useParams().traineeid;
    //courseid
    const courseid=useParams().courseid;

    //using useEffect

    useEffect( ()=>{

        const getSubtitle=async()=>{
            const response= await axios.get(`http://localhost:5000/api/subtitles/${subtitleid}`);
            const subtitledata=response.data;
            setSubtitle(subtitledata);

            const response2= await axios.get('http://localhost:5000/api/courses/getCourse/',{params :{id:courseid}});
            const coursehours=response2.data.totalhours



      const addedProgress=(subtitledata.totalHours-0.5)/coursehours;

        const update ={addedprogress:addedProgress}
         
        const response3=await axios.patch(`http://localhost:5000/api/corporateTrainee/updateProgress/${traineeid}/${courseid}`,update);


        }
        getSubtitle();
    },[]);










    







  return (
    <div>
             <div> 
             
             {/*  //header */}

             < StyledCourseHeader>
                <h3> {subtitle&&subtitle.title} </h3>
                <h6>Total Hours :{subtitle&&subtitle.totalHours}</h6>
             </StyledCourseHeader>
            

             </div>
              

             <div>
             < StyledCourseHeader>

             <h5>Content: </h5> 
              <p>{subtitle&&subtitle.content}</p>  
              </StyledCourseHeader>
                
            </div> 






             <div>
             < StyledCourseHeader>
                <h5>Exercises :</h5>
                </StyledCourseHeader>
             {subtitle&&subtitle.tasks.map((task)=>(
                    
                <div key={task._id}>
                    <Card sx={{ maxWidth: 400 ,maxHeight:60, mb:2}}  style={{boxShadow: "3"}}>
                         <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                   {task.title}
                            </Typography>
                            <br></br>
                            <br></br>
                            </CardContent>
                    </Card>
                </div>
                 
                

                   ))}









             </div>
                

    </div>
  )
}
