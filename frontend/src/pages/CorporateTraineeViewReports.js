import axios from 'axios';
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";
import CorporateTraineeNavBarCom from '../components/CorporateTraineesNavBarCom'


const ViewReports = () => {
  
    const header = {
        color: "darkRed",
        fontFamily: "Times New Roman",
        fontSize: "28px",
        textAlign: "center",
        fontWeight: "bold",
        
      };
  
  const navigate=useNavigate();

  
        const [reports, setReports] = useState([])
        const [reportid, setReportid] = useState(null)
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
       //const id = "63897f88f459b2631346deee";
        useEffect( ()=>{
            const fetchReports =async () =>{
                await axios.get(`http://localhost:5000/api/report/getReports/${id}`).then(
               (res) => { 
                   const reports = res.data
                   console.log(reports)
                   setReports(reports)
               }
                );
            }
            fetchReports()
        }, [])

        const openReport = () => {
          //e.preventDefault()
          var a = document.getElementById('report').value  ;
          setReportid(a)
          navigate(`/api/corporateTrainee/ReportDetails/${reportid}`)
        }

    
    
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
                        <CorporateTraineeNavBarCom />
                    </div>
                </div>
            </div>
        </header>
          <hr/>

<div className="main-banner">
        <div id="page-wrapper" style={{width: "1200px", height: "700px",left: "100px", margin: 70, background: "#DCDCDC" ,marginTop:"-200px"}} >
         <br/>
         <div id="page-inner" style={{width: "1100px", height: "600px", margin: 40, background: "white"}}>
            <br/>
            <div className="container">
            <div style={header}>My Reports</div>
                <div className="row">
               

<div className="card-container">
                        {reports  && reports.map((report) =>( 
                            <div className="card" onClick={()=>navigate(`/api/corporateTrainee/ReportDetails?reportid=${report._id}&id=${id}`)} style={{height: "15em", cursor: "pointer"}}  >
                            {/* <img src="assets/images/courseCard.jpg"/> */}
                            <div className="content"  value={report._id}>
                            <h3 style={{fontWeight: "bold"}}> {report.subject} </h3>
                                <p style={{color: "black"}} > Type: {report.type}</p>
                                <p style={{color: "black"}}> Status: {report.status}</p>
                                {/* <p>Price: {course.price}</p> */}
                            </div>
                            </div>
                        ))}
                     </div>
                     </div>
                     </div>


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

export default ViewReports
