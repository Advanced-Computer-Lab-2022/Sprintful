import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { shadows } from '@mui/system';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CorporateTraineeNavBarCom from '../components/CorporateTraineesNavBarCom'



//Stylings
import {StyledCourseHeader} from '../components/styles/CourseHeader.style'

export default function SubtitleViewCT() {
   const navigate = useNavigate();
      //states
    const  [subtitle,setSubtitle]=useState(null);

    //subtitle_id
    const subtitleid=useParams().subtitleid;
    //traineeid
    const traineeid=useParams().traineeid;
    //courseid
    const courseid=useParams().courseid;

    const header = {
      color: "darkRed",
      fontFamily: "Times New Roman",
      fontSize: "28px",
      textAlign: "center",
      fontWeight: "bold",
      
    };

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
          const response=await axios.patch(`http://localhost:5000/api/corporateTrainee/updateProgress/${traineeid}/${courseid}`,update);




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
            <div id="topbar" class="">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 p-0 text-center">
                            <ul class="top-menu">
                                <li><a href="tel:+201001004070">Phone:
                                        +201001004070</a></li>
                                <li><a href="mailto:info@cancham.org.eg">Email:
                                        info@cancham.org.eg</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 hidden-sm hidden-xs">
                            <div class="social-icons social-icons-colored-hover">
                                <ul>
                                    <li class="social-facebook"><a href="https://www.facebook.com/CanCham/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li class="social-twitter"><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                    <li class="social-youtube"><a href="https://www.youtube.com/channel/UC1ykoFKsMjVQCx3TeLIXDbg" target="_blank"><i class="fa fa-youtube"></i></a></li>
                                    <li class="social-gplus"><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="social-linkedin"><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            
            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                     <div className="col-12" style={{height: "50px"}}>
                            <CorporateTraineeNavBarCom />
                        </div>
                    </div>
                </div>
            </header>
              <hr/>
               
              <div className="main-banner">
        <div id="page-wrapper" style={{width: "1200px", height: "800px",left: "100px", margin: 70, background: "#DCDCDC", marginTop: "-200px"}} >
         <br/>
         <div id="page-inner" style={{width: "1100px", height: "700px", margin: 40, background: "white"}}>
            <br/>
            <div className="container">
            <div style={header}> {subtitle&&subtitle.title} </div>
                <div className="row">
                <p style={{color: "black", fontFamily: "Times New Roman"}}>Total Hours: {subtitle&&subtitle.totalHours}</p>
                <p style={{color: "black", fontFamily: "Times New Roman"}}>Content: {subtitle&&subtitle.content}</p>
                <hr/>
             <div>
             < StyledCourseHeader>
                <p style={{color: "black", fontFamily: "Times New Roman"}}>Exercises :</p>
                </StyledCourseHeader>
             {subtitle&&subtitle.tasks.map((task)=>(
                    
                <div key={task._id}>
                    <Card  sx={{ maxWidth: 400 ,maxHeight:60, mb:2}}  style={{boxShadow: "5px 10px 8px #CCCCCC"}}>
                         <CardContent onClick = { () => { navigate(`/quiz?taskid=${task._id}`)} }>
                            <Typography gutterBottom variant="h6" component="div" style={{color: "black", fontFamily: "Times New Roman"}}>
                                   {task.title}
                            </Typography>
                            <br></br>
                            <br></br>
                            </CardContent>
                    </Card>
                </div>
                 ))}


             </div>
<hr/>
             <div>
             < StyledCourseHeader>
                <p style={{color: "black", fontFamily: "Times New Roman"}}>Video:</p>
                </StyledCourseHeader>



                {subtitle && subtitle.videos.map((video)=>(
                    <div key={video._id}>
                <Card sx={{ maxWidth: 400 ,maxHeight:60, mb:2}}  style={{boxShadow: "5px 10px 8px #CCCCCC"}}>
                         <CardContent>
                         <span onClick={()=>{handleClickOnVideo(video,traineeid,courseid)}} style={{textDecoration: "underline",cursor: "pointer", color: "#a4243b"}}>
                         <Typography gutterBottom variant="h6" component="div" style={{color: "black", fontFamily: "Times New Roman"}}>
                                Videos
                                
                            </Typography>
                           </span>
                         {/* <a href={subtitle&&subtitle.youtubevideo}>
                            <Typography gutterBottom variant="h6" component="div">
                                Video
                            </Typography>
                            </a> */}
                            <Typography gutterBottom variant="h6" component="div" style={{color: "black", fontFamily: "Times New Roman"}}>
                               Video Description: {subtitle && video.videoDescription}
                            </Typography>

                            <br></br>
                            <Typography gutterBottom variant="h6" component="div" style={{color: "black", fontFamily: "Times New Roman"}} >
                               Hours: {subtitle && video.totalNoofHours}
                            </Typography>
                            <br></br>
                            </CardContent>
                    </Card>
                    </div>   
))}

             </div >
             </div>
             </div>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>

             <div  onClick={()=> navigate(`/api/courses/getCourse/${courseid}/CTN/${traineeid}`)} style={{color: 'white', 
         padding: '15px 50px 5px 50px',
         float: 'left',
         fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
         </div>
             </div>
             
                </div>
                </div>
</div>
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
