import {useState, useEffect } from 'react'
import axios from 'axios'


const reportDetails = () => {
    const [report, setReport] = useState([])
    const params = new URLSearchParams(window.location.search);
        const id = params.get('reportid');
    useEffect( ()=>{
        const fetchReport =async () =>{
            await axios.get(`http://localhost:5000/api/report/${id}`).then(
           (res) => { 
               const reports = res.data
               console.log(reports)
               setReport(reports)
           }
            );
        }
        fetchReport()
    }, [])

    return (
        <div>
            <h1>Report Details</h1>
        </div>
    );
}

export default reportDetails;