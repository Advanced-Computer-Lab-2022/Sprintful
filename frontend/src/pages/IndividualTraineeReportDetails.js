import {useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import IndividualTraineesNavBarCom from '../components/IndividualTraineesNavBarCom'

const ReportDetails = () => {
    const [report, setReport] = useState([])
    const[status, setStatus] = useState(null)
    const[available, setAvailable] = useState(false)
    const[followup, setFollowup] = useState(false)
    const[followupBody, setFollowupBody] = useState("")
    const [submit, setSubmit] = useState(false)
    const params = new URLSearchParams(window.location.search);
    const id = params.get('reportid');

    const navigate = useNavigate();
    useEffect( ()=>{
        const fetchReport =async () =>{
            await axios.get(`http://localhost:5000/api/report/${id}`).then(
           (res) => { 
               const response = res.data
               const stat=response.status
               setStatus(stat)
               console.log("status: " +status)
               if(status === "pending" || status === "unseen"){
                setAvailable(true)
               }
               setReport(response)
           }
            );
        }
        fetchReport()
    }, [status])

    const handleSubmit = async (e) => {
        //.preventDefault();
        console.log("submit")
        // var a = document.getElementById('button').value;
        // setFollowupBody(a)
         console.log("text "+followupBody)
         const body = {
            followup: followupBody
        }

        const response = await fetch(`http://localhost:5000/api/report/addFollowup/${id}`,{
            method:'POST',
            body :JSON.stringify(body),
            headers :{
                'Content-Type':'application/json'
            }
           })

           const json =await response.json()
           if(response.ok){
       
          console.log('Followup added',json)
          setSubmit(true)
            setFollowupBody('')
           }   
           else{
            console.log("fail")
           }
    }
        
    

    return (
        <div>
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
                            <IndividualTraineesNavBarCom />
                        </div>
                    </div>
                </div>
            </header>
              <hr/>
              <div className="main-banner">
            <div id="page-wrapper" style={{width: "1200px", height: "600px",left: "100px", margin: 70, background: "#DCDCDC" ,marginTop:"-200px"}} >
             <br/>
             <div id="page-inner" style={{width: "1100px", height: "500px", margin: 40, background: "white"}}>
                <br/>
                <div className="container">
                <div style={{ color: "darkRed",
                                fontFamily: "Times New Roman",
                                fontSize: "28px",
                                fontWeight: "bold"}}>{report.subject}</div>
                    <div className="row">
                   
        <div>
            <br/>
            <label style={{color: "black", fontFamily: "Times New Roman"}}>Type: {report.type}</label>
            <br/>
            <label style={{color: "black", fontFamily: "Times New Roman"}}>Status: {report.status}</label>
            <br/>
            <p style={{color: "black", fontFamily: "Times New Roman"}}>Body: {report.body}</p>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        {available &&
        <div className="followup">
            <button style={{backgroundColor:"#dc3545", width: "100px", textAlign: "center", justifyContent: "center", marginLeft: "75em", height: "30px", marginTop: "-60px",
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    minWidth: "50px",
                                                    position: "relative",
                                                    left: "200px"}}   onClick={()=> setFollowup(true)}> Add a FollowUp </button> 
         
        </div>
        }
        {followup &&
        <div className="followup">
            <label style={{color: "black", fontFamily: "Times New Roman"}}> Elaborate Please! </label>
            <input style={{width: "50%", height:"6em",padding: "6px 10px",margin: "10px 0",border: "1px solid #ddd",
                            boxSizing: "border-box",display: "block",fontSize:"14px",}} 
                            value={followupBody} onChange={(e)=>setFollowupBody(e.target.value)}
                            type="text" required/>


            <button style={{backgroundColor:"#dc3545", width: "100px", textAlign: "center", justifyContent: "center", marginLeft: "75em", height: "30px",
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    minWidth: "50px",
                                                    position: "relative",
                                                    left: "200px"}}   onClick={()=>handleSubmit()}> Submit </button> 
                    <br/>  
           
            {
                submit &&
                <label style={{color: 'green'}}>Followup Added successfully!</label>
            }
        </div>
       
        }
        </div>
        </div>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div  onClick={()=> navigate(`/api/individualTrainee/ViewReports?id=${id}`)} style={{color: 'white', 
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

export default ReportDetails