// import { useState } from "react"
// import axios from 'axios';

// const ReportProblem  =() =>{

// const[subject,setSubject]=useState('') 
// const[body,setBody]=useState('') 
// const[type,setType]=useState('') 
// const[instructorId,setInstructorId]=useState('') 
// const[individualTraineeId,setIndividualTraineeId]=useState('') 
// const[corporateTraineeId,setCorporateTraineeId]=useState('') 

// const handleSubmit= async (e)=>{
//     e.preventDefault()

//     let axiosConfig = {
//       headers: {
//           'Content-Type': 'application/json;charset=UTF-8',
//           "Access-Control-Allow-Origin": "*",
//       }
//     };

//     const params = new URLSearchParams(window.location.search);
//     const id = params.get('id');
//     console.log(id)
    
//     const response=  axios.post(`http://localhost:5000/api/report/ReportProblem?id=${id}`, { 
//         subject: subject,
//         body: body,
//         type: type,
//         instructorId: id,
//         individualTraineeId: id,
//         corporateTraineeId: id
  
//       },axiosConfig)
//       .then(function (response) {
//         console.log(response.data[0])
//         console.log(response.data[1])

//       })
//       .catch(function (error) {
//         console.log(error);
//       })

//       const json =await response[0].json()
//       if(response.ok){
//         console.log('Report added ',json)
//         setSubject('Computer Science')
//         setBody('')
//         setType('')
//         setInstructorId('')
//         setIndividualTraineeId('')
//         setCorporateTraineeId('')
//       };
//     }

// return (

//   <div className="create">
//     {<form onSubmit={handleSubmit}>  
//          <h3>Add a new Course</h3>
//             <label>Course Title:</label>
//                <input 
//                  type="text"
//                  onChange={(e)=>setTitle(e.target.value)}
//                  value={title}
//                  />
        
//             <label>Price (in LE):</label>
//                <input 
//                  type="number"
//                  onChange={(e)=>setPrice(e.target.value)}
//                  value={price}
//                  />
           
//            <label>total hours  :</label>
//                <input 
//                  type="number"
//                  onChange={(e)=>setTotalHours(e.target.value)}
//                  value={totalhours}
//                  />
        
//             <label>Short Summary</label>
//                <input 
//                  type="text"
//                  onChange={(e)=>setShortSummary(e.target.value)}
//                  value={shortsummary}
//                  />

//             <label>Preview video link</label>
//                <input 
//                  type="text"
//                  onChange={(e)=>setPreviewVideoLink(e.target.value)}
//                  value={previewvideolink}
//                  />
             
//              <label>discount:</label>
//                <input 
//                  type="number"
//                  onChange={(e)=>setDiscount(e.target.value)}
//                  value={discount}
//                  />
        


//              <label>choose Subject</label>
//                 <select value={subject}  onChange={(e)=>setSubject(e.target.value)}>
//                    <option value="Languages">Languages</option>
//                    <option value="Computer Science ">Computer Science </option>
//                    <option value="Physics">Physics</option>
//                    <option value="Business Adminstration">Business Adminstration</option>
//                 </select>
//               <button>Add Subtitle</button>
//     </form>}

//     </div>     
// )}

// export default ReportProblem 


import { useState } from "react"

const ReportProblem = () => {
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [type, setType] = useState('')
    const[instructorId,setInstructorId]=useState('') 
    const[individualTraineeId,setIndividualTraineeId]=useState('') 
    const[corporateTraineeId,setCorporateTraineeId]=useState('')
    
    const handleSubmit = async(e) => {
       e.preventDefault()
       const params = new URLSearchParams(window.location.search);
       const id = params.get('id');
       console.log(id)

        const NewReport = {subject, body, type}
        const response = await fetch(`http://localhost:5000/api/report/addReport?id=${id}`, {
            method: 'POST',
            body :JSON.stringify(NewReport),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await  response.json()
        console.log('The problem has been reported', json)
            setSubject('')
            setBody('')
            setType('')

        if(response.ok){
            setSubject('')
            setBody('')
            setType('')
            console.log('The problem has been reported', json)
        }
    }

    return (
        <div className="create">
            <form onSubmit={handleSubmit}> 
                <h3> Report Your Problem </h3>
                    <label>Subject: </label>
                        <input style={{width: "10em"}}
                        type="text"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}/>

                     <label>Body: </label>
                        <input style={{width: "20em", height: "10em"}}
                        type="text"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}/>

                    <label>Problem Type: </label>
                    <div style= {{width: "18em"}}>
                        <select value={type}  onChange={(e)=>setType(e.target.value)}>
                            <option value="Technical">Technical</option>
                            <option value="Financial">Financial</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                <br/>
                     <button> Report </button> 
            </form>
        </div>
    )
}
export default ReportProblem;