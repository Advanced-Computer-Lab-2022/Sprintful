import { useState } from "react"
import {useHistory} from "react-router-dom";

const CourseForm =() =>{

const[title,setTitle]=useState('') 
const [price ,setPrice]=useState('')
const [totalhours,setTotalHours]=useState('')
const [shortsummary,setShortSummary]=useState('')
const[previewvideolink,setPreviewVideoLink]=useState('')
const [discount,setDiscount]=useState('')
const [subject,setSubject]=useState('Computer Science')

const handleSubmit= async (e)=>{
    // e.preventDefault()
   const Course ={
   title,
   subject,
   price,
   totalhours,
   shortsummary,
   previewvideolink,
   discount,}

  //Route  /api/courses/

   const response = await fetch('/api/courses/',{
    method:'POST',
    body :JSON.stringify(Course),
    headers :{
        'Content-Type':'application/json'
    }
   })

   const json =response.json()
   console.log('Course added ',json)

   setTitle('')
   setPrice('')
   setSubject('Computer Science')
   setTotalHours('')
   setShortSummary('')
   setPreviewVideoLink('')
   setDiscount('')
   
   

}




return (

  <div className="create">
    <form onSubmit={handleSubmit}>  
         <h3>Add a new Course</h3>
            <label>Course Title:</label>
               <input 
                 type="text"
                 onChange={(e)=>setTitle(e.target.value)}
                 value={title}
                 />
        
            <label>Price (in LE):</label>
               <input 
                 type="number"
                 onChange={(e)=>setPrice(e.target.value)}
                 value={price}
                 />
           
           <label>total hours  :</label>
               <input 
                 type="number"
                 onChange={(e)=>setTotalHours(e.target.value)}
                 value={totalhours}
                 />
        
            <label>Short Summary</label>
               <input 
                 type="text"
                 onChange={(e)=>setShortSummary(e.target.value)}
                 value={shortsummary}
                 />

            <label>Preview video link</label>
               <input 
                 type="text"
                 onChange={(e)=>setPreviewVideoLink(e.target.value)}
                 value={previewvideolink}
                 />
             
             <label>discount:</label>
               <input 
                 type="number"
                 onChange={(e)=>setDiscount(e.target.value)}
                 value={discount}
                 />
        


             <label>choose Subject</label>
                <select value={subject}  onChange={(e)=>setSubject(e.target.value)}>
                   <option value="Languages">Languages</option>
                   <option value="Computer Science ">Computer Science </option>
                   <option value="Physics">Physics</option>
                   <option value="Business Adminstration">Business Adminstration</option>
                </select>
              <button>Add Course for Now !</button>
    </form>

    </div>     

  



)



}

export default CourseForm