import { useState } from "react"
import axios from 'axios';
const CourseForm =() =>{

const[title,setTitle]=useState('') 
const [price ,setPrice]=useState('')
const [totalhours,setTotalHours]=useState('')
const [shortsummary,setShortSummary]=useState('')
const[previewvideolink,setPreviewVideoLink]=useState('')
const [discount,setDiscount]=useState('')
const [subject,setSubject]=useState('Computer Science')
const [contract,setContract] =useState(true)
const handleSubmit= async (e)=>{
    e.preventDefault()
  //  const Course ={
  //  title,
  //  subject,
  //  price,
  //  totalhours,
  //  shortsummary,
  //  previewvideolink,
  //  discount}

  //Route  /api/courses/
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
   console.log(id)
    axios.post(`http://localhost:7000/api/courses?id=${id}`, { //?id=${id}
      title: title ,
      subject: subject,
      price: price,
      totalhours: totalhours,
      shortsummary: shortsummary,
      instructor: id,
      previewvideolink: previewvideolink,
      discount: discount

    },axiosConfig)
    .then(function (response) {
      // console.log(response);
      // console.log('Course added ',response.data)
      console.log(response.data[0])
      console.log(response.data[1])
      // contract =response.data[1];
      setContract(response.data[1])

    })
    .catch(function (error) {
      console.log(error);
    });
  //  const response = await fetch(`/api/courses?id=${id}`,{
  //   method:'POST',
  //   body :JSON.stringify(Course),
  //   headers :{
  //       'Content-Type':'application/json'
  //   }
  //  })


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
    { <form onSubmit={handleSubmit}>  
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
    </form>}
    { !contract &&<p className="contractError">Please accept our terms and conditions to add courses</p> 

    }

    </div>
     

)



}

export default CourseForm