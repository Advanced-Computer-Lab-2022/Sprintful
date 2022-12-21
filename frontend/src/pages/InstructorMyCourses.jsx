import InstructorHomeNavBar  from '../components/InstructorHomeNavBar';
import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import InstructorSearch from '../components/InstructorSearch';

export default function InstructorMyCourses() {
    const [courses,setCourses] = useState([])
    const [courses2,setCourses2] = useState([])
    const [searchTerm,setSearchTerm] = useState(null)
    const [searched,setSearched] = useState(false)
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/instructor?id=${id}`) 
        .then((res) => {
           console.log(res.data)
           setCourses(res.data)
        })
       .catch(errors => {
           // react on errors.
           console.error(errors);
       });

       axios.get(`http://localhost:5000/api/courses/instructor/search?id=${id}&searchTerm=${searchTerm}`)
       .then((res) => {
           console.log(res.data)
           setCourses2(res.data);
       })
       .catch((err) => {
           console.log(err);
       });
       setSearchTerm(null)

    }, [searchTerm,searched]);
   
    const handleOnChange = async(e) =>{
        e.preventDefault()
        var a = document.getElementById('input').value  ;
        setSearchTerm(a)
        setSearched(true);
        console.log(searchTerm)
   }

   const mystyle = {
    color: "white",
    backgroundColor: "#8d99af",
    padding: "10px",
    position: "relative",
    top: "50px",
    left: "500px",
    width: "130px",
    height: "40px",
    fontSize: "13px"
    };

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
                            <InstructorHomeNavBar />
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}

            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-text header-text">
                                <h2>My Courses </h2>
                            </div>
                        </div>
                        <div>
                            { 
                            <form id="search-form" name="gs" method="submit" role="search" action="#">
                                <div className="row">
                                    <div className="col-lg-3 align-self-center">
                                        <fieldset>
                                            <input id={'input'} type="address" value={searchTerm} name="address" className="searchText" placeholder="Search my Courses by title or subject ..." autocomplete="on" required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-3">
                                        <fieldset>
                                            <button id="main-button" onClick={handleOnChange}><i className="fa fa-search"></i> Search Now</button>
                                        </fieldset>
                                    </div>
                                </div>

                            </form>
                            }
                            <div>
                                <button id="main-button" style={mystyle}> Add a new Course</button>
                            </div>
                            { searched &&
                                <div className="card-container">
                                    {courses2  && courses2.map((course) =>( 
                                        <div className="card">
                                            <img src="assets/images/courseCard.jpg"/>
                                            <div className="content">
                                                <h3> {course.title} </h3>
                                            </div>
                                        </div>
                                    ))}             
                                </div>
                            }
                        </div>
                        {/* Instructor Course view */}
                        { !searched && 
                        <div className="card-container">
                            {courses  && courses.map((course) =>( 
                                <div className="card">
                                    <img src="assets/images/courseCard.jpg"/>
                                    <div className="content">
                                        <h3> {course.title} </h3>
                                        <p>totalhours: {course.totalhours}</p>
                                        <p>rating: {course.rating}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        }
                    </div>
                </div>
            </div>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about">
                                <div className="logo">
                                    <img src="assets/images/black-logo.png" alt="Plot Listing" />
                                </div>
                                <p>If you consider that <a rel="nofollow" href="https://templatemo.com/tm-564-plot-listing" target="_parent">Plot Listing template</a> is useful for your website, please <a rel="nofollow" href="https://www.paypal.me/templatemo" target="_blank">support us</a> a little via PayPal.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="helpful-links">
                                <h4>Helpful Links</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li><a href="#">Categories</a></li>
                                            <li><a href="#">Reviews</a></li>
                                            <li><a href="#">Listing</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Awards</a></li>
                                            <li><a href="#">Useful Sites</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-us">
                                <h4>Contact Us</h4>
                                <p>27th Street of New Town, Digital Villa</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="#">010-020-0340</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <a href="#">090-080-0760</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sub-footer">
                                <p>Copyright © 2021 Plot Listing Co., Ltd. All Rights Reserved.
                                    <br />
                                    Design: <a rel="nofollow" href="https://templatemo.com" title="CSS Templates">TemplateMo</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}