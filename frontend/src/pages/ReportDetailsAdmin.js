import {useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import {useNavigate} from "react-router";
import Alert from '@mui/material/Alert';

const ReportDetails = () => {

    const header = {
        color: "darkRed",
        fontFamily: "Times New Roman",
        fontSize: "28px",
        textAlign: "center",
        fontWeight: "bold",
        
      };
      const navigate=useNavigate();

    const [report, setReport] = useState([])
    const[status, setStatus] = useState("UnSeen")
    const[followups, setFollowups] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [clicked, setClicked] = useState(false)
    const params = new URLSearchParams(window.location.search);
    const id = params.get('reportid');


    useEffect( ()=>{
        const fetchReport =async () =>{
            await axios.get(`http://localhost:5000/api/report/${id}`).then(
           (res) => { 
               const response = res.data
               const stat=response.status
            //    setStatus(stat)
               setReport(res.data)
               console.log(res.data)
               console.log(response)
               console.log("status: " +status)
           }
            );
        }
        fetchReport()
    }, [])

    const handleSubmit = async (e) => {
        //.preventDefault();
        console.log("submit")
        // var a = document.getElementById('button').value;
        // setFollowupBody(a)


    }

    const changeStatus = async(e) => {
        console.log(e)

        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
        };

        console.log(e)
        const response = await axios.put(`http://localhost:5000/api/report/changeStatus?reportid=${e}`, {
            status: status

        }, axiosConfig)
        .then(function (response){
            console.log(response)
            setClicked(true)
        })
        .catch(function (error){
            console.log(error);
        })
        (
           (res) => {
               const report = res.data
               console.log(report)
               setClicked(true)
           }
            );
            if(response){
                console.log(response)
                setStatus("")
                setClicked(true)
               
            }
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
 <div style={header}>Subject: {report.subject}</div>

        {/* <div className='details'> */}
        <div className="container">
        {/* <label style={{color: "black", fontFamily: "Times New Roman", textAlign: "center"}}>Subject: </label>
        
        <div  style={{ color: "darkRed",
                    fontFamily: "Times New Roman",
                    fontSize: "28px",
                    fontWeight: "bold"}}></div> */}
                
                    {/* <div className="row"> */}
                   
        <div>
            <br/>
            <label style={{color: "black", fontFamily: "Times New Roman"}}>Type: {report.type}</label>
            <br/>
            <label style={{color: "black", fontFamily: "Times New Roman"}}>Status: {report.status}</label>
            <br/>
            <label style={{color: "black", fontFamily: "Times New Roman"}}>Body: {report.body}</label>
        </div>
        
         
        </div>
        <br/>
        <br/>

        <label  style={{marginLeft: "1000px", color: "black", fontFamily: "Times New Roman"}}>Change Status: </label>
        {/* <div style= {{width: "18em"}}> */}
                            <select  style={{marginLeft: "1015px"}}
                            value={status}  onChange={(e)=>setStatus(e.target.value)}>
                                <option value="unseen">UnSeen</option>
                                <option value="pending">Pending</option>
                                <option value="resolved">Resolved</option>
                            </select>
                        {/* </div> */}
                        <br/>
<br/>

<                                   button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    minWidth: "50px",
                                                    position: "relative",
                                                    left: "1100px"}} onClick={() => changeStatus(report._id)}> Apply </button>  
                                                    {clicked &&  <Alert style={{width: "350px", fontSize: "10px", color: "black"}}>
                        Status' has been changed successfully!
                        </Alert>}   
<br/>
<br/>
<br/>
<hr/>
<div>
<div style={header}>Followups:</div>
                <div className="card-container">
                            {report.followups && report.followups.map((followup) =>( 
                                <div className="card" style={{height: "20em", width:"1250px"}}  >
                  
                                <div className="content">
                                    <h3 style={{fontWeight: "bold"}}> {followup} </h3>
                                    
                                    {/* <p>Price: {course.price}</p> */}
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

             <div  onClick={()=> navigate(`/adminViewReports?id=${id}`)} style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'left',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
             </div>

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

export default ReportDetails