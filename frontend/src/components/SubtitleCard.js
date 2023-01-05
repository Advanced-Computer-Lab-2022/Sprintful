import {StyleCard} from './styles/Card.style'

export default function  SubtitleCard({subtitle:{_id,title ,totalHours, tasks}}){
 

    return (
        <StyleCard>
            <div>

            <h5  style={{color: "black", fontFamily: "Times New Roman", fontSize: "12px", fontWeight: "bold"}}>{title}</h5>
            <h6  style={{color: "black", fontFamily: "Times New Roman", fontSize: "12px", fontWeight: "bold"}}>Total Hours: {totalHours}</h6>
            <br></br>
            <h6  style={{color: "black", fontFamily: "Times New Roman", fontSize: "12px", fontWeight: "bold"}}>Exercises: </h6>
            {tasks.map((task)=>(
                    
                        <div key={task._id}>
                        

                            
                         <div>
                          <li  style={{color: "black", fontFamily: "Times New Roman", fontSize: "12px"}}>{task.title}</li>
                          </div>
                       
                          
                        </div>
                     
                      

                       ))}

          



           </div>


        </StyleCard>
    )
}