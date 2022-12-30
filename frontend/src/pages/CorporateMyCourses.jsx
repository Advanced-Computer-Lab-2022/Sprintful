import CorporateTraineeHomeNavBar from '../components/CorporateTraineeHomeNavBar';
import CorporateTraineeSearch from '../components/CorporateTraineeSearch';
import React, { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function CorporateTraineeMyCourses() {
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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-text header-text">
                                {/* <h6>Over 36,500+ Courses</h6> */}
                                <h2>My Courses </h2>
                            </div>
                        </div>
                        {/* Corporate Course view */}
                        <div className="card-container">
                            {courses  && courses.map((course) =>( 
                                <div className="card" onClick = { () => { navigate(`/api/courses/getCourse/${course._id}/CTR`)} }>
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
                        {/* <div className="col-lg-10 offset-lg-1">
                            <ul className="categories">
                                <li><a href="category.html"><span className="icon"><img src="assets/images/search-icon-01.png" alt="Home" /></span> Apartments</a></li>
                                <li><a href="listing.html"><span className="icon"><img src="assets/images/search-icon-02.png" alt="Food" /></span> Food &amp; Life</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-03.png" alt="Vehicle" /></span> Cars</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-04.png" alt="Shopping" /></span> Shopping</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-05.png" alt="Travel" /></span> Traveling</a></li>
                            </ul>
                        </div> */}
                        {/* <div className="col-lg-12">
                           <CorporateTraineeSearch/> 
                        </div> */}
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