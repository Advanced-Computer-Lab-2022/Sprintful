import {useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'


const ReportDetails = () => {
    const [report, setReport] = useState([])
    const [status, setStatus] = useState("UnSeen")
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
            <h1 style={{fontSize:"24px"}}>{report.subject}</h1>
            <br/>
            <label style={{fontSize:"16px"}}>Report type: {report.type}</label>
            <br/>
            <label style={{fontSize:"16px", color:'black'}}>Report status: {report.status}</label>
            <br/>
            <p style={{fontSize:"16px", textAlign:"left"}}>Details: {report.body}</p>
            <br/>
           
            <label>Change Status: </label>
                <div style= {{width: "18em"}}>
                    <select value={status}  onChange={(e)=>setStatus(e.target.value)}>
                        <option value="unseen">UnSeen</option>
                        <option value="pending">Pending</option>
                        <option value="resolved">Resolved</option>
                    </select>
                </div>
            <button onClick={() => changeStatus(report._id)}> Apply </button>
        </div>
    )
}

export default ReportDetails