import {StyleCard} from './styles/Card.style'
import {Link} from 'react-router-dom'

export default function  SubtitleCardClickableTrainee({subtitle:{_id,title ,totalHours, tasks}}){
 

    return (
        <StyleCard>
            <div>
            <Link to={`/api/subtitles/getSubtitle/${_id}/CTE`}>
            <h5>{title}</h5>
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