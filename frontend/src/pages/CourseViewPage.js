import React from 'react'

import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import HomeNavBar from '../components/HomeNavBar';

export default function CourseViewPage() {

  const [course,setCourse]=useState(null);
  const [coursePriceAfterDiscount,setPrice]=useState('');
  const [courseSubtitles,setCourseSubtitles]=useState([]);
  
  ///api/courses
  const {courseid}=useParams();



  //Using useEffect to run only on 1st render to display the course's data
  useEffect( ()=>{
      const getCourseanditsSubtitle=async()=>{

     
          try{
          //Sending a get request to the server to get course
             const response= await axios.get('http://localhost:5000/api/courses/',{params :{id:courseid}});
             const coursedata=response.data;
             setCourse(coursedata);
  
             //handling setting course price according to discount and its expiry date 
                 //checking if expiry date has passed
                    //getting today's date (day 1)
                    let currentdate  =new Date();
                    let year=currentdate.getFullYear();
                    let month=currentdate.getMonth()+1; //because it outputs a number from 0-11 ex:3-->April
                    let day =currentdate.getDate();
                    let dateCformat=`${year}-${month}-${day}`  //current date in appropriate format.
                    let dateC=new Date(dateCformat);
                    //console.log(dateCformat);

                    //getting expiry date from DB "through server response"
                    const expirydate=coursedata.discountExpireAt;
                    const dateEformat=expirydate.substring(0,10);  //Put it in appropriate format
                    const dateE=new Date(dateEformat);
                    //console.log(dateEformat);

                    //Comparing current date with expiry date 
                    console.log(dateC.getTime()<=dateE.getTime());
                     if(dateC.getTime()<=dateE.getTime()){

                      const newPrice=course.discount*course.price;
                      setPrice(newPrice);
                     }

                     else{
                      setPrice(coursedata.price);
                        }



          //Sending a get request to server to get this course's Subtitles
          const response2=await axios.get(`http://localhost:5000/api/courses/getSubtitlesforCourse/${courseid}`);
          const subtitlesArray=response2.data;
          setCourseSubtitles(subtitlesArray);

  
  
  
  
          }
          //catching any request error
          catch (error){
  
          }
  
        }
       
       getCourseanditsSubtitle(); } 
      ,[courseid] );


      return (
        <div>
           {/* <!-- ***** Preloader Start ***** --> */}
           <div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                    <span className="dot"></span>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Preloader End ***** --> */}

            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <HomeNavBar />
                        </div>
                    </div>
                </div>
            </header>




        </div>
    
);
   
  
}
