import {useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'


const ReportDetails = () => {
    const [report, setReport] = useState([])
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
            <h1>Report Details</h1>
            <label>Report type: {report.type}</label>
        </div>
    )
}

export default ReportDetails