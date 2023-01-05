import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import IndividualTraineesNavBarCom from '../components/IndividualTraineesNavBarCom';
import '../pages/css/templatemo-plot-listing.css'




export default function IndividualProfile() {

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

  

    const [trainee, setTrainee] = useState("");
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
        await axios.get(`http://localhost:5000/api/individualTrainee/profile?id=${id}`)
        
        .then((res) => {
          setTrainee(res.data);
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
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <IndividualTraineesNavBarCom />
                        </div>
                    </div>
                </div>
            </header>
            <hr/>
            {/* <!-- ***** Header Area End ***** --> */}

            <div className="main-banner">
            <div id="page-wrapper" style={{width: "1200px", height: "700px",left: "100px", margin: 70, background: "#DCDCDC" ,marginTop:"-200px"}} >
             <br/>
             <div id="page-inner" style={{width: "1100px", height: "600px", margin: 40, background: "white"}}>
                <br/>
                <div className="container">
                <div style={header}>My Profile</div>
                    <div className="row">

                        <div className="col-lg-12">
                        {trainee && (
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
                   <h5 className="my-3">{trainee.firstName} {trainee.lastName}</h5>
                   <p className="text-muted mb-1" style={{color: "black", fontFamily: "Times New Roman"}}>Wallet Amount: {trainee.money}</p>
                 </div>
               </div>
             </div>
             <div className="col-lg-8"  style={{boxShadow: "5px 10px 8px #888888"}}>
               <div className="card mb-4">
                 <div className="card-body">
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0" style={{color: "black", fontFamily: "Times New Roman"}}>Username</p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{trainee.username}</p>
                     </div>
                   </div>
                   <hr/>
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0" style={{color: "black", fontFamily: "Times New Roman"}}>First Name</p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{trainee.firstName}</p>
                     </div>
                   </div>
                   <hr/>
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0" style={{color: "black", fontFamily: "Times New Roman"}}>Last Name</p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{trainee.lastName}</p>
                     </div>
                   </div>
                   <hr/>
                   <div className="row">
                     <div className="col-sm-3">
                       <p className="mb-0" style={{color: "black", fontFamily: "Times New Roman"}}>Email</p>
                     </div>
                     <div className="col-sm-9">
                       <p className="text-muted mb-0">{trainee.email}</p>
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
                    <button style={{backgroundColor:"#dc3545", width: "150px", textAlign: "center", justifyContent: "center", marginLeft: "72.5em", height: "30px",
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    minWidth: "50px",
                                                    position: "relative",
                                                    left: "200px"}}  onClick={()=> navigate(`/api/individualTrainee/changePassword?id=${id}`)}>Change Password</button>


</div>
                </div>
            </div>
           
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div  onClick={()=> navigate(`/individual?id=${id}`)} style={{color: 'white', 
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

