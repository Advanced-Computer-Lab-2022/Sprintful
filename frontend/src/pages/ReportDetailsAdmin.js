import {useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'


const ReportDetails = () => {
    const [report, setReport] = useState([])
    const[status, setStatus] = useState("null")
    const[followups, setFollowups] = useState(false)
    const [submit, setSubmit] = useState(false)
    const params = new URLSearchParams(window.location.search);
    const id = params.get('reportid');


    useEffect( ()=>{
        const fetchReport =async () =>{
            await axios.get(`http://localhost:5000/api/report/${id}`).then(
           (res) => { 
               const response = res.data
               const stat=response.status
               setStatus(stat)
               setReport(res.data)
               console.log(res.data)
               console.log(response)
               console.log("status: " +status)
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
        })
        .catch(function (error){
            console.log(error);
        })
        (
           (res) => {
               const report = res.data
               console.log(report)
           }
            );
            if(response.ok){
                console.log(response)
                setStatus("")
            }
        }
        
    

    return (
        <div>
        <div className='details'>
            <h1 style={{fontSize:"24px", color: 'maroon'}}>{report.subject}</h1>
            <br/>
            <label style={{fontSize:"16px"}}>Report type: {report.type}</label>
            <br/>
            <label style={{fontSize:"16px", color:'black'}}>Report status: {report.status}</label>
            <br/>
            <p style={{fontSize:"16px", textAlign:"left"}}>Details: {report.body}</p>
        </div>
        <br/>
        <br/>
        <label>Change Status: </label>
        <div style= {{width: "18em"}}>
                            <select style={{width: "100%",
                                            padding: "6px 10px",
                                            margin: "10px 0",
                                            border: "1px solid #ddd",
                                            boxSizing: "border-box",
                                            display: "block",
                                            fontSize:"14px",}}
                            value={status}  onChange={(e)=>setStatus(e.target.value)}>
                                <option value="unseen">UnSeen</option>
                                <option value="pending">Pending</option>
                                <option value="resolved">Resolved</option>
                            </select>
                        </div>
                    <button style={{ width:"2%", background: "#8d99af", color: "#fff", border: "0",
                        padding: "6px",borderRadius: "6px",cursor: "pointer" }}onClick={() => changeStatus(report._id)}> Apply </button>      

                        <br/>
<br/>
<br/>
<hr/>

<label style={{color:"#8d99af", fontSize:"20px"}}>Followups</label> 
                <br/>
                <div className="followup">
                <ul >
                    { report.followups && report.followups.map((followup) => (
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