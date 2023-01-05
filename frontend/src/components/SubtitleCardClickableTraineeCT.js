import {StyleCard} from './styles/Card.style'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function  SubtitleCardClickableTraineeCT({subtitle:{_id,title ,totalHours, tasks},traineeid,courseid}){

   
    
 

    return (
        <StyleCard>
            <div >
             <Link to={`/api/subtitles/getSubtitle/${_id}/CTE/${traineeid}/${courseid}`}> 
            <h5 style={{color: "black", fontFamily: "Times New Roman", fontSize: "12px", fontWeight: "bold"}}>{title}</h5>
             </Link> 
            <h6 style={{color: "black", fontFamily: "Times New Roman", fontSize: "12px", fontWeight: "bold"}}>Total Hours :{totalHours}</h6>
            <br></br>
            <h6 style={{color: "black", fontFamily: "Times New Roman", fontSize: "12px", fontWeight: "bold"}}>Exercises: </h6>
            {tasks.map((task)=>(
                    
                        <div key={task._id}>
                        

                            
                         <div>
                          
                          <li>{task.title}</li>
                         
                          </div>
                       
                          
                        </div>
                     
                      

                       ))}

          



           </div>


        </StyleCard>
    )
}