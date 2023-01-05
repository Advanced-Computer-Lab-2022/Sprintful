import axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {Typography} from '@mui/material';
import { blue } from '@mui/material/colors';
import {StyledCourseHeader} from '../components/styles/CourseHeader.style'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import SubtitleCard from '../components/SubtitleCard'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { spacing } from '@mui/system';
import { positions } from '@mui/system';

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import SubtitleCardClickableTraineeIT from '../components/SubtitleCardClickableTraineeIT';
import FileDownload from 'js-file-download';
import IndividualTraineeNavBarCom from '../components/IndividualTraineesNavBarCom';

//stylings custom css



const CourseViewITN=()=>{
    const [rating, setRating] = useState(0);
    const [comment, setReview] = useState("")
    const [hoverStar, setHoverStar] = useState(undefined);
     const [sendCertificate, setSendCertificate] =useState(false);
    // const useStyles=makeStyles({
    //     courseTitle:{
    //         fontSize:60,
    //         color:blue,
    
    
     
    //     }
    // })

    //styles
    // const classes=useStyles();

    // const [course,setCourse]=useState(null);
    // const [coursePriceAfterDiscount,setPrice]=useState('');
    // const [courseSubtitles,setCourseSubtitles]=useState([]);
    const [courseStates,setCourseStates]=useState({
        course:null,
        coursePriceAfterDiscount:'',
        courseSubtitles:[],
        progress:0,
        isProgressLow:null
     });
    ///api/courses
    //const {courseid,traineeid}=useParams();
    const courseid=useParams().courseid;
    const traineeid=useParams().traineeid;
    const header = {
      color: "darkRed",
      fontFamily: "Times New Roman",
      fontSize: "28px",
      textAlign: "center",
      fontWeight: "bold",
      
    };

    const [completed,setCompleted]= useState(0);
    const [done,setDone]= useState(false);

    //useNavigate
    const navigate=useNavigate();


    //Button Clicking 
   const handleRequestRefund=async(e)=>{

    const response=await axios.post(`http://localhost:5000/api/refund/requestRefund/${traineeid}/${courseid}`)


   }

   const handleSubmit1= async(e)=>{
    e.preventDefault();
    console.log("im alive")
    const NewRate = {rating, comment}

         const response = await fetch(`http://localhost:5000/api/courses/review/${courseid}`, {
             method: 'PUT',
             body :JSON.stringify(NewRate),
             headers: {
                 'Content-Type': 'application/json'
             }
         })
         const json = await  response.json()
         console.log('New review was added', json)
             setRating('')
             setReview('')
   }

   const handleSubmit22= async(e)=>{
    e.preventDefault();

    const id = await axios.get(`http://localhost:5000/api/instructor/getInstructorByCourse/${courseid}`)
    console.log("if id:::::", id.data.instid)
    console.log("im alive22")
    const NewRate = {rating, comment}

         const response = await fetch(`http://localhost:5000/api/instructor/review?id=${id.data.instid}`, {
             method: 'PUT',
             body :JSON.stringify(NewRate),
             headers: {
                 'Content-Type': 'application/json'
             }
         })
         const json = await  response.json()
         console.log('New review was added', json)
             setRating('')
             setReview('')
   }
   

  
    //Using useEffect to run only on 1st render to display the course's data
    useEffect( ()=>{
      
        const getCourseanditsSubtitle=async()=>{
            //Sending a get request to the server to get course
               const response= await axios.get('http://localhost:5000/api/courses/getCourse/',{params :{id:courseid}});
               const coursedata=response.data;
               //setCourse(coursedata);
               let finalPrice=0;
               //handling setting course price according to discount and its expiry date 
                   //checking if expiry date has passed
                      //getting today's date (day 1)
                      let currentdate  =new Date();
                      let year=currentdate.getFullYear();
                      let month=currentdate.getMonth()+1; //because it outputs a number from 0-11 ex:3-->April
                      let day =currentdate.getDate();
                      let dateCformat=`${year}-${month}-${day}`  //current date in appropriate format.
                      let dateC=new Date(dateCformat);
                      //console.log(currentdate);
                      console.log(dateC)

                      //getting expiry date from DB "through server response"
                      const expirydate=coursedata.discountExpireAt+"";
                      const dateformat=new Date(expirydate)

                      let year2=dateformat.getFullYear();
                      let month2=dateformat.getMonth()+1; //because it outputs a number from 0-11 ex:3-->April
                      let day2 =dateformat.getDate();
                      //const dateEformat=expirydate.substring(0,10);  //Put it in appropriate format
                      const dateEformat =`${year2}-${month2}-${day2}`
                      const dateE=new Date(dateEformat);
                      //console.log(expirydate);
                      console.log(dateE);

                      //Comparing current date with expiry date 
                      console.log(dateC.getTime()<=dateE.getTime());
                      if(dateC.getTime()<=dateE.getTime()){

                        const newPrice=coursedata.discount*coursedata.price;
                        finalPrice=newPrice;
                       }
                       else{
                        finalPrice=coursedata.price;
                        }
            //    //handling setting course price according to discount and its expiry date 
            //        //checking if expiry date has passed
            //           //getting today's date (day 1)
            //           const currentdate  =new Date();
            //           const year=currentdate.getFullYear();
            //           const month=currentdate.getMonth()+1; //because it outputs a number from 0-11 ex:3-->April
            //           const day =currentdate.getDate();
            //           const dateCformat=`${year}-${month}-${day}`  //current date in appropriate format.
            //           const dateC=new Date(dateCformat);
            //           //console.log(dateCformat);

            //           //getting expiry date from DB "through server response"
            //           const expirydate=coursedata.discountExpireAt;
            //           const dateEformat=expirydate.substring(0,10);  //Put it in appropriate format
            //           const dateE=new Date(dateEformat);
            //           //console.log(dateEformat);

            //           //Comparing current date with expiry date 
            //           //console.log(dateC.getTime()<=dateE.getTime());
            //            if(dateC.getTime()<=dateE.getTime()){

            //             const newPrice=coursedata.discount*coursedata.price;
            //             finalPrice=newPrice;
            //             console.log('heree')
            //            }

            //            else{
            //            finalPrice=coursedata.price;
            //               }
            //Sending a get request to server to get this course's Subtitles
            const response2=await axios.get(`http://localhost:5000/api/courses/getSubtitlesforCourse/${courseid}`);
            const subtitlesArray=response2.data;
            //setCourseSubtitles(subtitlesArray);
            //getting the corporateTrainee progress in course 
            //to check if progress <50
            let lowProgress=null
            const response3=await axios.get(`http://localhost:5000/api/individualTrainee/getProgress/${traineeid}/${courseid}`)
            const progressdata=response3.data.progress
            console.log(progressdata)
            setCompleted(progressdata);
            if(progressdata == 1)
            {
                setDone(true);
                console.log("Done"+ done);
            }
            if(progressdata<0.5){
                lowProgress=" "
            }
            const progressPercentage=Math.trunc(progressdata*100)
            setCourseStates({
                course:coursedata,
                coursePriceAfterDiscount:finalPrice,
                courseSubtitles:subtitlesArray,
                progress:progressPercentage,
                isProgressLow:lowProgress
            })
            }
            //catching any request error
         getCourseanditsSubtitle()
        
        }  
        ,[done] );
        const {course, coursePriceAfterDiscount,courseSubtitles,progress,isProgressLow}=courseStates

        const handleOnCLick= async(e) =>{
            e.preventDefault();
            const config = {
              method: "GET",
              responseType: "blob"
              
            };
           const response= await axios.get('http://localhost:5000/api/courses/download', config).
            then((res) => {
              console.log(res.data)
              FileDownload(res.data,'Certificate.png')
            })
        }
        const handleEmail= async(e) =>{
          e.preventDefault();
         const response= await axios.get(`http://localhost:5000/api/courses/${traineeid}/emailCertificate/${courseid}/`).
          then((res) => {
            setSendCertificate(true)
          })
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
                            <IndividualTraineeNavBarCom />
                        </div>
                    </div>
                </div>
            </header>
              <hr/>
               
              <div className="main-banner">
        <div id="page-wrapper" style={{width: "1200px", height: "1500px",left: "100px", margin: 70, background: "#DCDCDC", marginTop: "-200px"}} >
         <br/>
         <div id="page-inner" style={{width: "1100px", height: "1400px", margin: 40, background: "white"}}>
            <br/>
            <div className="container">
            <div style={header}> {course && course.title} </div>
                <div className="row">
               
              
               <p style={{color: "black", fontFamily: "Times New Roman"}}>Total Hours: {course && course.totalhours}</p>
               <p style={{color: "black", fontFamily: "Times New Roman"}}>Price: {course && coursePriceAfterDiscount}</p>
               <p style={{color: "black", fontFamily: "Times New Roman"}}>Your Progress:  {course && progress} %</p>
               
      
               {(() => {
                         if (isProgressLow) {
                        return   <button onClick={handleRequestRefund} style={{backgroundColor:"#dc3545", 
                        borderRadius:"3px", 
                        color: 'white', 
                        // padding: '15px 50px 5px 50px',
                        float: 'center',
                        fontSize: '10px',
                        minHeight:"30px", 
                        width: "150px",
                        position: "relative",
                        left: "750px"}} variant="contained"  sx={{ height: 40 }}>
                                       Request Refund
                                 </button> 
                                                     ;
                                            } 
                            })()}
                     

             </div>
             {  done && <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    width: "150px",
                                                    position: "relative",
                                                    left: "750px"}} variant="contained"  onClick={handleOnCLick}> Download My Certificate  </button> }
             
             {done && <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    width: "100px",
                                                    position: "relative",
                                                    left: "770px"}} variant="contained" onClick={handleEmail}>
                                                    Receive My Certificate via Email </button> }

             { sendCertificate &&
                        <div style={{position:"relative", top:"-80px", left:"150px"}}>
                          <Alert severity="success">
                          <AlertTitle>Success</AlertTitle>
                          Certificate was sent! — <strong>check your Inbox!</strong>
                          </Alert>   
                          </div>                    
                        }                                   


                  
<hr/>
<br/>
            <p style={{color: "black", fontFamily: "Times New Roman", fontSize: "16px"}}>Course Subtitles: </p>
            <br/>
            <br/>
              
            <div>
                 {/* subtitles */}

                  {course &&courseSubtitles.map((subtitle)=>(
                        <SubtitleCardClickableTraineeIT key={subtitle._id}  subtitle={subtitle}  traineeid={traineeid}  courseid={courseid}/> 
                         ))}
                    </div>

<hr/>
       

<div>
                    <label  style={{color: "black", fontFamily: "Times New Roman"}}>Rate your course</label>
    <form onSubmit={handleSubmit1}> 
          <div >
                {Array(5).fill().map((_, index) =>
                  rating >= index + 1 || hoverStar >= index + 1 ? (
                    <AiFillStar
                      onMouseOver={() => !rating && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange" }}
                      onClick={() => setRating(index + 1)}
                    />
                  ) : (
                    <AiOutlineStar
                      onMouseOver={() => !rating && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange" }}
                      onClick={() => setRating(index + 1)}
                    />
                  )
                  
                )} 
            </div> 
            <br/>
            <div>
            <label  style={{color: "black", fontFamily: "Times New Roman"}}>Review:</label>
                        <input 
                        type="text"
                        onChange={(e) => setReview(e.target.value)}
                        value={comment} required/>
            </div>

            <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    height:"20px", 
                                                    width: "60px",
                                                    position: "relative",
                                                    left: "150px"}}> Submit </button>
    </form>
</div>



<br/>
<br/>
<hr/>
<br/>
<br/>


<div>
<label  style={{color: "black", fontFamily: "Times New Roman"}}>Rate your instructor</label>
    <form onSubmit={handleSubmit22}> 
          <div >
                {Array(5).fill().map((_, index) =>
                  rating >= index + 1 || hoverStar >= index + 1 ? (
                    <AiFillStar
                      onMouseOver={() => !rating && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange" }}
                      onClick={() => setRating(index + 1)}
                    />
                  ) : (
                    <AiOutlineStar
                      onMouseOver={() => !rating && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange" }}
                      onClick={() => setRating(index + 1)}
                    />
                  )
                  
                )} 
            </div> 
<br/>
            <div>
            <label  style={{color: "black", fontFamily: "Times New Roman"}}>Review:</label>
                        <input 
                        type="text"
                        onChange={(e) => setReview(e.target.value)}
                        value={comment} required/>

                 {/* <textarea id="area1" placeholder={handlePlaceHolder()}></textarea> 
                /*setReview(document.getElementById('area1').value); */}
            </div>

            <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    height:"20px", 
                                                    width: "60px",
                                                    position: "relative",
                                                    left: "150px"}}> Submit </button>
    </form>
</div>


             </div>
             <br/>
             <br/>
             <br/>
             <br/>
             <div  onClick={()=> navigate(`/MyEnrolledCourses?id=${traineeid}`)} style={{color: 'white', 
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

export default CourseViewITN;