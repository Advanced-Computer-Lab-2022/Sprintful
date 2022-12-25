import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomeNavBar from '../components/HomeNavBar';
import './css/templatemo-plot-listing.css'




export default function InstructorProfile() {

  //   spr-container
  const style1= {
    minHeight: "10px",
    maxWidth: "1200px",
    margin: "0 auto",
    float: "none",
    padding: "0 15px !important",
    width: "100%",
    fontSize: "inherit",
    boxSizing: "border-box",
    overFlow: "hidden",
  }
  // spr-icon 
  const style2= {
    color: "#fdbc00",
    fontSize: "120%",
    position: "relative",
    width: "1.3em",
    height: "1.3em",
  }
  // spr-summary-actions-newreview 
  const style3 = {
    float: "right",
    border: "1px solid",
    borderRadius: "5px",
    padding: "5px",
    marginRight: "24px"
  }
  
  // .spr-review 
  const style4 = {
    width: "31%",
    margin: "0 1% !important",
    minHeight: "250px",
    display: "inlineBlock",
    float: "left",
    padding: "20px 25px !important",
    /*background: #fff;*/
    marginBottom: "25px !important",
    border: "1px solid",
    borderRadius: "12px"
  }
  const style6 ={ //.spr-pagination 
    clear: "both"
  }
  
  const style7 ={ //#shopify-product-reviews .spr-review-header-title
    display: "block",
    clear: "both",
    float: "none"
  }
  
//   const style11 = {@media (maxWidth: "800px") {

//     const style8 = { //.spr-review
//      float: "none",
//      width: "100%",
//      minHeight: "auto",
//      margin: "0 !important",
//      marginBottom: "25px !important"
//    }
 
//     const style9={ //.spr-summary-actions-newreview
//      marginRight: "0px"
//    }
//  }
// }

  

    const [instructor, setInstructor] = useState("");
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        await axios.get(`http://localhost:5000/api/instructor/profile?id=${id}`)
        
        .then((res) => {
          setInstructor(res.data);
          console.log(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
    }       
    fetchData();
    }, []);

  return (
        <div>
            
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
            {/* <!-- ***** Header Area End ***** --> */}

            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        {instructor && (
                        <div className="profile" style={{backgroundColor: "#eee"}}>
         
    
         <div className="container py-5">
           <div className="row">
             <div className="col">
             
             </div>
           </div>
       
           <div className="row">
             <div className="col-lg-4">
               <div className="card mb-4">
                 <div className="card-body text-center">
                   <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                     className="rounded-circle img-fluid" style={{width: "150px"}}/>
                   <h5 className="my-3">John Smith</h5>
                   <p className="text-muted mb-1">Rating: {instructor.rating}</p>
                 </div>
               </div>
             </div>
             <div className="col-lg-8">
               <div className="card mb-4">
                 <div className="card-body">
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0">Username</p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{instructor.username}</p>
                     </div>
                   </div>
                   <hr/>
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0">First Name</p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{instructor.firstName}</p>
                     </div>
                   </div>
                   <hr/>
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0">Last Name</p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{instructor.lastName}</p>
                     </div>
                   </div>
                   <hr/>
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0">Email</p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{instructor.email}</p>
                     </div>
                   </div>
                   <hr/>
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0">Biography</p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{instructor.biography}</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
                        </div>
            )}
                    </div>
                </div>
            </div>
            </div>
            
            <div>
            {/* <div className="popular-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading"> */}
                            <br/>
                              <h1 style = {{color: "black"}}> My Reviews</h1>
                              <div className="card-container">
                                {instructor  && instructor.reviews.map((review) =>( 
                                      <div className="card">
                                      <div className="content">
                                          <h3> {review} </h3>
                                          {/* <p>totalhours: {course.totalhours}</p>
                                          <p>rating: {course.rating}</p>
                                          <p>Price: {course.price}</p> */}
                                      </div>
                                      </div>
                                ))}
                      
        </div>
                              
                            </div>
                        {/* </div>
                    </div>
                </div>
            </div> */}
           
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about">
                                <div className="logo">
                                    {/* <img src="assets/images/black-logo.png" alt="Plot Listing" /> */}
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

