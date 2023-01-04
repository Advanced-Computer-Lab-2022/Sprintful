import axios from 'axios';
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import {useNavigate} from "react-router";



const ViewReports = () => {

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

        const navigate=useNavigate();
        const [reports, setReports] = useState([])
        const [reportid, setReportid] = useState("fghj")
        useEffect( ()=>{
            const fetchReports =async () =>{
                await axios.post('http://localhost:5000/api/report/getReportsAdmin').then(
               (res) => { 
                   const reports = res.data
                   console.log(reports)
                   setReports(reports)
               }
                );
            }
            fetchReports()
        }, [])

        const openReport = async(e) => {
          //e.preventDefault()
          // var a = document.getElementById('report').id  ;
          // var b = document.getElementsByClassName('card').id ;
          // console.log("a " +a)
          // console.log("b " +b)

          // setReportid(a)
          // console.log("openReport 1 "+reportid)
          // setReportid("2345678")
          // console.log("openReport 2 "+reportid)
          navigate(`/ReportDetailsAdmin/${reportid}`)
        }

    
    
  return (
    <div style= {{  borderLeft: "2px solid silver",
    height: "1000px",
    //position:"absolute",
    //  left: "50%"
    borderRight: "2px solid silver",
    height: "1000px",
  }}>

<nav className="navbar navbar-default navbar-cls-top " role="navigation" style = {{marginBottom: '0', background: "silver"}}> 
<a class="salata" data-dark-logo="/upload/logo.png" syle={{position: "relative"}}>

                                <img src="/upload/logo.png" alt="Homepage" style={{width: "140px", 
                                                                                    height: "60px",
                                                                                    marginRight: "900px"}}/>
                            </a>
         
         {/* <div className="navbar-header"> */}
             {/* <a  style={{color: 'white',
                         fontWeight: "bold", 
                         float: "left",
                         fontSize: '25px',
                         testAlign: "left"}}>Canadian Chamber of Commerce</a>  */}
         {/* </div> */}
 <div  style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'right',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust">Logout</a> 
 
 </div>
     </nav>

     <hr/> 
     <br/>  
 <div style={header}>UnResolved Reports</div>
<div className="card-container">
                            {reports  && reports.map((report) =>( 
                                <div onClick={()=>navigate(`/ReportDetailsAdmin?reportid=${report._id}`)} className="card" style={{height: "15em", cursor: "pointer"}}  >
                                {/* <img src="assets/images/courseCard.jpg"/> */}
                                <div className="content">
                                    <h3 style={{fontWeight: "bold"}}> {report.subject} </h3>
                                    <p style={{color: "black"}} > Type: {report.type}</p>
                                    <p style={{color: "black"}}> Status: {report.status}</p>
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

                         <div  onClick={()=> navigate(`/admin?id=${id}`)} style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'left',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
             </div>

             <br/>
                         <br/>
                         <br/>
                         <br/>
                         <br/>

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
