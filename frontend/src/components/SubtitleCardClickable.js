import {StyleCard} from './styles/Card.style'
import {Link} from 'react-router-dom'

export default function  SubtitleCardClickable({subtitle:{_id,title ,totalHours, tasks}}){
 

    return (
        <StyleCard>
            <div>
            <Link to={`/api/subtitles/getSubtitle/${_id}/Instructor`}>
            <h5 style={{color: "black", fontFamily: "Times New Roman", fontSize: "12px", fontWeight: "bold"}}>{title}</h5>
            </Link>
            <h6 style={{color: "black", fontFamily: "Times New Roman", fontSize: "12px", fontWeight: "bold"}}>Total Hours: {totalHours}</h6>
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