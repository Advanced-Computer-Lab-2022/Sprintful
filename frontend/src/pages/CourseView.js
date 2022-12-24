import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


const CourseView=()=>{

    const [course,setCourse]=useState(null);
    const [coursePriceAfterDiscount,setPrice]=useState('');
    const [courseSubtitles,setCourseSubtitles]=useState([]);
    
    ///api/courses
    const {courseid}=useParams();


    //Fetching the course's data and its Subtitles
    //   const getCourseanditsSubtitle=async()=>{

       
    //     try{
    //     //Sending a get request to the server to get course
    //        const response= await axios.get('/api/courses/',{params :{id:courseid}});
    //        const coursedata=response.data;
    //        setCourse(coursedata);

    //        //handling setting course price according to discount and its expiry date 



    //        //Sending a get request to server to get this course's Subtitles





    //     }
    //     //catching any request error
    //     catch (error){

    //     }

    //   }



    //Using useEffect to run only on 1st render to display the course's data
    useEffect( ()=>{
        const getCourseanditsSubtitle=async()=>{

       
            try{
            //Sending a get request to the server to get course
               const response= await axios.get('http://localhost:5000/api/courses/',{params :{id:courseid}});
               const coursedata=response.data;
               setCourse(coursedata);
    
               //handling setting course price according to discount and its expiry date 
    
    
    
               //Sending a get request to server to get this course's Subtitles
    
    
    
    
    
            }
            //catching any request error
            catch (error){
    
            }
    
          }
         
         getCourseanditsSubtitle(); } 
        ,[courseid] );





    return (
    <div>
        {/* we check that course is not null before getting its attributes using boolean operator && AND */}
        <h1>{course&&course.title}</h1>
        <h2>Total Hours :{course&&course.totalhours}</h2>
        <h4>{course&&coursePriceAfterDiscount}</h4>






    </div>




    )
}

export default CourseView;