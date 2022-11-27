import { useState } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios';




const SubtitleForm =()=>{
    const[title,setTitle]=useState('');
    const[totalHours,setTotalHours]= useState('')
    const[content,setContent]=useState('')
    const {courseid}=useParams();



    //Handling adding another subtitle
    const handleAddAnotherSubtitle=async()=>{
      //getting the course id from the URL /:courseid  
   

      const subtitle={title:title ,totalHours:totalHours,course:courseid,content:content}
      console.log("HERE");

      const response=await axios.post(`/api/subtitles/addSubtitle/${courseid}`,subtitle)

      if(response.ok){
        console.log("subtitle added",response.data)
        setTitle('');
        setTotalHours('');
        setContent('');
      }

     /* else{
        console.log("ERROR")
      } */

    }


    //Handling done with the Subtitles 
    const handleDone= async()=>{
      //submitting the subtitle Normally (same as handleAddAnotheSubtitle)
     const subtitle={title:title ,totalHours:totalHours,course:courseid,content:content}

      const response=await axios.post(`http://localhost:5000/api/subtitles/addSubtitle/${courseid}`,subtitle)

      if(response.ok){
        console.log("subtitle added",response.data)
        setTitle('');
        setTotalHours('');
        setContent('');
      }

     //Redirecting to the course view page  //take course id from url params in order to redirect to the course view page 

    }









    return (
     <div className="create">
        <form  onSubmit={handleAddAnotherSubtitle}>  
             <h3>Add a new Subtitle</h3>
             <label>Title:</label>
               <input 
                 type="text"
                 onChange={(e)=>setTitle(e.target.value)}   //e--> the event   target is the input "the element itself"  value-->value inside the HTML element (value inside the text box)
                 value={title}
                 />


              <label>Total Hours :</label>
               <input 
                 type="number"
                 onChange={(e)=>setTotalHours(e.target.value)}   //e--> the event   target is the input "the element itself"  value-->value inside the HTML element (value inside the text box)
                 value={totalHours}
                 />
  


              <label>Content: </label>
               <textarea 
                 onChange={(e)=>setContent(e.target.value)}   //e--> the event   target is the input "the element itself"  value-->value inside the HTML element (value inside the text box)
                 value={content} >
                 </textarea>

               <p>You can skip the content now and fill it later </p>  


               <button > Save & Add Another Subtitle</button>

                    
           </form>



  
            {/* <button onClick={handleDone}>Done</button>  */}

      </div>
      
      
      )

}


export default SubtitleForm;