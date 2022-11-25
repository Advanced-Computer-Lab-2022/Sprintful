import { useState } from "react"




const SubtitleForm =()=>{
    const[title,setTitle]=useState('');
    const[totalHours,setTotalHours]= useState('')
    const[content,setContent]=useState('')









    return (
        <div className="create">
        <form >  
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


               <button onClick={handleAddAnotherSubtitle}> Save & Add Another Subtitle</button>

                    
    </form>



  
                        <button onclick={()=>{handleDone}}>Done</button>  //take course id from url params in ordert to redirect to the course view page 












        </div>






    )




}


