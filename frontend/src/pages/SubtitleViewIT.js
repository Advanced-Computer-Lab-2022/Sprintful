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

export default function SubtitleViewIT() {
   const navigate = useNavigate();

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



     

        }
        getSubtitle();
    },[]);



    const handleClickOnVideo=async(video,traineeid,courseid)=>{
      //checking if he has watched this video before 
      console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmr")
    const response3=await axios.post(`http://localhost:5000/api/watchedVideo/corporate/checkifVideoWatched/${traineeid}`,{videoid:video._id})
    const found=response3.data.found
    console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    if(!found) {   //Never Watched 
    const response4=await axios.patch(`http://localhost:5000/api/watchedVideo/corporate/addwatchedvideo/${traineeid}`,{watchedvideo:video._id})
    //getting course total hours 
    const response2= await axios.get('http://localhost:5000/api/courses/getCourse/',{params :{id:courseid}});
    const coursehours=response2.data.totalhours
    //updating progress
    const videoHours=video.totalNoofHours;
    const addedProgress=videoHours/coursehours
    const update ={addedprogress:addedProgress}
     const response=await axios.patch(`http://localhost:5000/api/individualTrainee/updateProgress/${traineeid}/${courseid}`,update);




    window.location.href = `/SubtitlesVideo?link=${video.youtubevideo}`

      }


else{
      window.location.href = `/SubtitlesVideo?link=${video.youtubevideo}`
}
//window.location.href = `/SubtitlesVideo?link=${video.youtubevideo}`

}









    







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
                         <CardContent onClick = { () => { navigate(`/quiz?taskid=${task._id}`)} }>
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
                         <span onClick={()=>{handleClickOnVideo(video,traineeid,courseid)}} style={{textDecoration: "underline",cursor: "pointer", color: "#a4243b"}}>
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

               

</div>

    </div>
  )
}
