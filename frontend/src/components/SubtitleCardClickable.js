import {StyleCard} from './styles/Card.style'
import {Link} from 'react-router-dom'

export default function  SubtitleCardClickable({subtitle:{_id,title ,totalHours, tasks}}){
 

    return (
        <StyleCard>
            <div>

            <h5>{title}</h5>
            <h6>total hours :{totalHours}</h6>
            <br></br>
            <h6>Exercises:</h6>
            {tasks.map((task)=>(
                    
                        <div key={task._id}>
                        

                            
                         <div>
                          <Link to={`/api/subtitles/${_id}/Instructor`}>
                          <li>{task.title}</li>
                          </Link>
                          </div>
                       
                          
                        </div>
                     
                      

                       ))}

          



           </div>


        </StyleCard>
    )
}