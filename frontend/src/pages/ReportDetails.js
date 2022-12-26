import {useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'


const ReportDetails = () => {
    const [report, setReport] = useState([])
    const[status, setStatus] = useState(null)
    const[available, setAvailable] = useState(false)
    const[followup, setFollowup] = useState(false)
    const[followupBody, setFollowupBody] = useState("")
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
        {available &&
        <div className="followup">
            <button style={{color: 'white', background: "#8d99af", width: "150px", fontSize:"13px"}} onClick={()=> setFollowup(true)}> Add FollowUp</button>
        </div>
        }
        {followup &&
        <div className="followup">
            <input style={{width: "50%", height:"6em",padding: "6px 10px",margin: "10px 0",border: "1px solid #ddd",
                            boxSizing: "border-box",display: "block",fontSize:"14px",}} 
                            value={followupBody} onChange={(e)=>setFollowupBody(e.target.value)}
                            type="text"
            />
            {/* <button style={{color: 'white', backgroundColor:'grey', width: "100px", height:"2em", textAlign:"center", verticalAlign:"center", fontSize:"13px"}}> Submit</button> */}
            <button style={{ background: "#8d99af", color: "#fff", border: "0",
                        padding: "8px",borderRadius: "8px",cursor: "pointer", width:"20px"}} 
                         onClick={()=>handleSubmit()}>
                            Submit</button>
                            <br/>
            {
                submit &&
                <label style={{color: 'green'}}>Followup Added successfully!</label>
            }
        </div>
        }
        </div>
    )
}

export default ReportDetails