import {StyleCard} from './styles/Card.style'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function  SubtitleCardClickableTraineeCT({subtitle:{_id,title ,totalHours, tasks},traineeid,courseid}){

   
    
 

    return (
        <StyleCard>
            <div >
             <Link to={`/api/subtitles/getSubtitle/${_id}/CTE/${traineeid}/${courseid}`}> 
            <h5 >{title}</h5>
             </Link> 
            <h6>total hours :{totalHours}</h6>
            <br></br>
            <h6>Exercises:</h6>
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