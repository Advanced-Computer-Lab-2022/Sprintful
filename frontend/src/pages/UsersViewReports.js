import axios from 'axios';
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";



const ViewReports = () => {
  
  const header = {
    color: "#911E04",
    fontSize: "30px",
    textAlign: "center",
  };
  
  const navigate=useNavigate();

  
        const [reports, setReports] = useState([])
        const [reportid, setReportid] = useState(null)
        const params = new URLSearchParams(window.location.search);
       // const id = params.get('id');
       const id = "63897f88f459b2631346deee";
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
          navigate(`/ReportDetails/${reportid}`)
        }

    
    
  return (
    <div>
    <div style={{backgroundColor: "#999DA0", padding: "20px"}}>
    <div style={header}>ViewReports</div>
    </div>
    {/* {reports.map((report) => (
      <div style={{border: '20px black'}}>
        <div>{report.subject}</div>
      </div>

    ))}    */}

<div className="card-container">
                            {reports  && reports.map((report) =>( 
                                <div className="card" style={{height: "30em"}} onClick={()=>openReport}>
                                {/* <img src="assets/images/courseCard.jpg"/> */}
                                <div className="content"  value={report._id}>
                                    <h3> {report.subject} </h3>
                                    <p>type: {report.type}</p>
                                    <p>status: {report.status}</p>
                                    {/* <p>Price: {course.price}</p> */}
                                </div>
                                </div>
                            ))}
                         </div>


    </div>
  )
}

export default ViewReports
