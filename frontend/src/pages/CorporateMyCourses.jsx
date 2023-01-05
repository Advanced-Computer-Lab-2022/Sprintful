import CorporateTraineeHomeNavBar from '../components/CorporateTraineeHomeNavBar';
import CorporateTraineeSearch from '../components/CorporateTraineeSearch';
import React, { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CorporateTraineeNavBarCom from '../components/CorporateTraineesNavBarCom';
export default function CorporateTraineeMyCourses() {

    const header = {
        color: "darkRed",
        fontFamily: "Times New Roman",
        fontSize: "28px",
        textAlign: "center",
        fontWeight: "bold"
        
      };
    
    const navigate = useNavigate();

    const [courses, setCourses] = useState("");
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    useEffect(() => {
         axios.get(`http://localhost:5000/api/courses/corporate/myCourses?id=${id}`) 
         .then((res) => {
            console.log(res.data)
            setCourses(res.data)
         })
        .catch(errors => {
            // react on errors.
            console.error(errors);
        });
    
    }, []);
    return (

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
                            <CorporateTraineeHomeNavBar />
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}

            <div className="main-banner">
            <div id="page-wrapper" style={{width: "1200px", height: "1500px",left: "100px", margin: 70, background: "#DCDCDC", marginTop: "-200px"}} >
          <br/>
          <div id="page-inner" style={{width: "1100px", height: "1400px", margin: 20, background: "white"}}>
             <br/>
                <div className="container">
                <div style={header}>My Courses</div>
                      
                        {/* Corporate Course view */}
                        <div className="card-container">
                            {courses  && courses.map((course) =>( 
                                <div className="card" onClick = { () => { navigate(`/api/courses/getCourse/${course._id}/CTN/${id}`)} }> 
                                <img src="assets/images/courseCard.jpg"/>
                                <div className="content">
                                    <h3> {course.title} </h3>
                                    <p>totalhours: {course.totalhours}</p>
                                    <p>rating: {course.rating}</p>
                                    {/* <p>Price: {course.price}</p> */}
                                </div>
                                </div>
                            ))}
                         </div>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                        <br/>
                         <div  onClick={()=> navigate(`/corporate?id=${id}`)} style={{color: 'white', 
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