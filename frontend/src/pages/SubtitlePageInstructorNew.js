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
import Button from '@mui/material/Button';
import { spacing } from '@mui/system';




//Stylings
import {StyledCourseHeader} from '../components/styles/CourseHeader.style'

export default function SubtitlePageInstructorNew() {
      //states
    const  [subtitle,setSubtitle]=useState(null);

    //subtitle_id
    const {subtitleid}=useParams();

    //useNavigate
    const navigate=useNavigate();


//Handling Navigation to Adding videoLink and Video Description to a Subtitle
    const handleAddVideoLink=()=>{
    navigate(`/api/subtitles/addVideoLink/${subtitleid}`)
    navigate(0)

     }




    //using useEffect

    useEffect( ()=>{

        const getSubtitle=async()=>{
            const response= await axios.get(`http://localhost:5000/api/subtitles/${subtitleid}`);
            const subtitledata=response.data;
            setSubtitle(subtitledata);


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

             
             <div>
             < StyledCourseHeader>
                <h5>Video:</h5>
                </StyledCourseHeader>



                {subtitle && subtitle.videos.map((video)=>(
                    <div key={video._id}>
                <Card sx={{ maxWidth: 400 ,maxHeight:60, mb:2}}  style={{boxShadow: "3"}}>
                         <CardContent>
                         <span onClick={() => window.location.href = `/Video?link=${video.youtubevideo}`} style={{textDecoration: "underline",cursor: "pointer", color: "#a4243b"}}>
                         <Typography gutterBottom variant="h6" component="div">
                                Video
                                
                            </Typography>
                           </span>
                         {/* <a href={subtitle&&subtitle.youtubevideo}>
                            <Typography gutterBottom variant="h6" component="div">
                                Video
                            </Typography>
                            </a> */}
                            <Typography gutterBottom variant="h6" component="div">
                               Video Description :{subtitle && video.videoDescription}
                            </Typography>

                            <br></br>
                            <Typography gutterBottom variant="h6" component="div">
                               Hours :{subtitle && video.totalNoofHours}
                            </Typography>
                            <br></br>
                            </CardContent>
                    </Card>
                    </div>   
))}

             </div >





             <div>
             <Button  onClick={handleAddVideoLink} style={{ maxHeight: '50px', maxWidth: '300px', minHeight: '50px',  }} variant="contained"  sx={{ height: 40 ,mt:4 }}>
                Add Video Link and Discription 
             </Button>

             </div>
                
             
    </div>
  )
}
