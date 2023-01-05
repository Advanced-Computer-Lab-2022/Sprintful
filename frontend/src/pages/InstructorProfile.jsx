import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InstructorNavBarCom from '../components/InstructorNavBarCom';
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
    const [amount, setAmount] = useState(0);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);
    const header = {
      color: "darkRed",
      fontFamily: "Times New Roman",
      fontSize: "28px",
      textAlign: "center",
      fontWeight: "bold",
      
    };

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
                            <InstructorNavBarCom />
                        </div>
                    </div>
                </div>
            </header>
              <hr/>
            {/* <!-- ***** Header Area End ***** --> */}
           
            <div className="main-banner">
            <div id="page-wrapper" style={{width: "1200px", height: "1400px",left: "100px", margin: 70, background: "#DCDCDC" ,marginTop:"-200px"}} >
             <br/>
             <div id="page-inner" style={{width: "1100px", height: "1200px", margin: 22, background: "white"}}>
                <br/>
                <div className="container">
                <div style={header}>My Profile</div>
                    <div className="row">
                   
                        <div className="col-lg-12">
                        {instructor && (
                           
                        <div className="profile">
         
    
         <div className="container py-5">
           <div className="row">
             <div className="col">
             
             </div>
           </div>
       
           <div className="row">
             <div className="col-lg-4" style={{boxShadow: "5px 10px 8px #888888"}}>
               <div className="card mb-4">
                 <div className="card-body text-center">
                   <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                     className="rounded-circle img-fluid" style={{width: "150px"}}/>
                   <h5 className="my-3">{instructor.firstName} {instructor.lastName}</h5>
                   <p className="text-muted mb-1" style={{color: "black", fontFamily: "Times New Roman"}}>Rating: {instructor.rating}</p>
                 </div>
               </div>
             </div>
             <div className="col-lg-8" style={{boxShadow: "5px 10px 8px #888888"}}>
               <div className="card mb-4">
                 <div className="card-body">
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0" style={{color: "black", fontFamily: "Times New Roman"}}>Username: </p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{instructor.username}</p>
                     </div>
                   </div>
                   <hr/>
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0" style={{color: "black", fontFamily: "Times New Roman",}}>First Name: </p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{instructor.firstName}</p>
                     </div>
                   </div>
                   <hr/>
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0" style={{color: "black", fontFamily: "Times New Roman",}}>Last Name: </p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{instructor.lastName}</p>
                     </div>
                   </div>
                   <hr/>
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0" style={{color: "black", fontFamily: "Times New Roman"}}>Email: </p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{instructor.email}</p>
                     </div>
                   </div>
                   <hr/>
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0" style={{color: "black", fontFamily: "Times New Roman"}}>Biography: </p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{instructor.biography}</p>
                     </div>
                  <hr/>
                     <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0" style={{color: "black", fontFamily: "Times New Roman"}}>Wallet: </p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{instructor.money}</p>
                     </div>
                   </div>
                     
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
                        </div>
            )}
                    <br/>
                      
                      <button style={{backgroundColor:"#dc3545", width: "100px", textAlign: "center", justifyContent: "center", marginLeft: "75em", height: "30px",
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    minWidth: "50px",
                                                    position: "relative",
                                                    left: "200px"}}  onClick={()=> navigate(`/api/instructor/editProfile?id=${id}`)}>Edit Profile </button> 
                    <br/>  
                    <br/>
                    <br/>
                    <button style={{backgroundColor:"#dc3545", width: "150px", textAlign: "center", justifyContent: "center", marginLeft: "72.5em", height: "30px",
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    minWidth: "50px",
                                                    position: "relative",
                                                    left: "200px"}}  onClick={()=> navigate(`/api/instructor/changePassword?id=${id}`)}>Change Password</button>


                    </div>
                </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div>
                
                 <br/>
                              <h1 style = {header}> My Reviews</h1>
                              <br/>
                            
                              <div className="card-container">
                                {instructor  && instructor.reviews.map((review) =>( 
                                      <div className="card"  style={{width: "950px", left: "50px", boxShadow: "5px 10px 8px #888888"}}>
                                      <div className="content">
                                          <h3> {review} </h3>
                                       
                                      </div>
                                      </div>
                                ))}
                      
        
        </div>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div  onClick={()=> navigate(`/instructor?id=${id}`)} style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'left',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
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

