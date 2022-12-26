import {useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'


const ReportDetails = () => {
    const [report, setReport] = useState([])
    const[followups, setFollowups] = useState([])
    const params = new URLSearchParams(window.location.search);
        const id = params.get('reportid');


    useEffect( ()=>{
        const fetchReport =async () =>{
            await axios.get(`http://localhost:5000/api/report/${id}`).then(
           (res) => { 
               const response = res.data
               console.log(response)
               setReport(response)
           }
            );
        }
        fetchReport()
    }, [])

    return (
        <div>
            <h1 style={{fontSize:"24px", color:'maroon'}}>{report.subject}</h1>
            <br/>
            <label style={{fontSize:"16px"}}>Report type: {report.type}</label>
            <br/>
            <label style={{fontSize:"16px", color:'black'}}>Report status: {report.status}</label>
            <br/>
            <p style={{fontSize:"16px", textAlign:"left"}}>Details: {report.body}</p>
<br/>
<br/>
<br/>
<br/>
<hr/>

                <label style={{color:"#8d99af", fontSize:"20px"}}>Followups</label>
                <br/>
            {/* <div className="followup" style={{borderWidth:"1px", borderStyle:"solid",borderColor:"grey"}}> */}
            <div className="followup">
                <ul >
                    { report.followups.map((followup) => (
                        <li style={{fontSize: "14px"}}>
                           - {followup}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ReportDetails