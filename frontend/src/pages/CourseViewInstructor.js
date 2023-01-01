import axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {Typography} from '@mui/material';
import { blue } from '@mui/material/colors';
import {StyledCourseHeader} from '../components/styles/CourseHeader.style'
import SubtitleCard from '../components/SubtitleCard'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { spacing } from '@mui/system';
import { positions } from '@mui/system';
import SubtitleCardClickable from '../components/SubtitleCardClickable';



//stylings custom css



const CourseViewInstructor=()=>{
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
      courseSubtitles:[]
   });
    
    ///api/courses
    const {courseid}=useParams();

    //useNavigate
    const navigate=useNavigate();


    //Button Clicking 
    const handleAddPromotion=()=>{
        navigate(`/api/courses/addPromotion/${courseid}`);
        navigate(0);
    }


  
    //Using useEffect to run only on 1st render to display the course's data
    useEffect( ()=>{
        const getCourseanditsSubtitle=async()=>{

       
            try{
            //Sending a get request to the server to get course
               const response= await axios.get('http://localhost:5000/api/courses/getCourse/',{params :{id:courseid}});
               const coursedata=response.data;
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


    
              //  //handling setting course price according to discount and its expiry date 
              //      //checking if expiry date has passed
              //         //getting today's date (day 1)
              //         let currentdate  =new Date();
              //         let year=currentdate.getFullYear();
              //         let month=currentdate.getMonth()+1; //because it outputs a number from 0-11 ex:3-->April
              //         let day =currentdate.getDate();
              //         let dateCformat=`${year}-${month}-${day}`  //current date in appropriate format.
              //         let dateC=new Date(dateCformat);
              //         //console.log(dateCformat);

              //         //getting expiry date from DB "through server response"
              //         const expirydate=coursedata.discountExpireAt;
              //         const dateEformat=expirydate.substring(0,10);  //Put it in appropriate format
              //         const dateE=new Date(dateEformat);
              //         //console.log(dateEformat);

              //         //Comparing current date with expiry date 
              //         console.log(dateC.getTime()<=dateE.getTime());
              //         if(dateC.getTime()<=dateE.getTime()){

              //           const newPrice=coursedata.discount*coursedata.price;
              //           finalPrice=newPrice;
              //          }

              //          else{
              //           finalPrice=coursedata.price;
              //             }



            //Sending a get request to server to get this course's Subtitles
            const response2=await axios.get(`http://localhost:5000/api/courses/getSubtitlesforCourse/${courseid}`);
            const subtitlesArray=response2.data;
            //setCourseSubtitles(subtitlesArray);

            setCourseStates({
              course:coursedata,
              coursePriceAfterDiscount:finalPrice,
              courseSubtitles:subtitlesArray



          })

    
    
    
    
            }
            //catching any request error
            catch (error){
    
            }
    
          }
         
         getCourseanditsSubtitle(); } 
        ,[] );


        const {course, coursePriceAfterDiscount,courseSubtitles}=courseStates    //destructuring 


    return (

        <div>
            <div>
               
               < StyledCourseHeader>
               <h3> {course && course.title} </h3>
               <h6>Total Hours :{course&&course.totalhours}</h6>
               <h6>Price:  {course && coursePriceAfterDiscount}</h6>
               <h6>Rating: {course&&course.rating}</h6>
               
               </StyledCourseHeader>
                

             </div>



                    <Box
                         //margin
                        mt={1}
                        ml={0}
                        pl={0}
                       
                        

                        
                         display="flex"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                          
                           >
                            
                         <Button  onClick={handleAddPromotion} style={{ maxHeight: '50px', maxWidth: '120px', minHeight: '50px',  }} variant="contained"  sx={{ height: 40 }}>
                         Add Promotion
                           </Button>
                       
                    </Box>

              


             

              <div>
                 {/* subtitles */}

                  {course &&courseSubtitles.map((subtitle)=>(
                        <SubtitleCardClickable key={subtitle._id}  subtitle={subtitle}/> 
                         ))}
                    </div>

                    {/* <br/>
                    <br/>
                    <br/>

                    <div>
                            <br/>

                              <h1 style = {{color: "black"}}> Course Reviews</h1>
                              <div className="card-container">
                                {course  && course.reviews.map((review) =>( 
                                      <div className="card">
                                      <div className="content">
                                          <h3> {review} </h3>
                                      </div>
                                      </div>
                                ))}
                      
        </div>
                              
                            </div>        */}



    </div>
    )
}

export default CourseViewInstructor;