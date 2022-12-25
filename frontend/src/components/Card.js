import {StyleCard} from './styles/Card.style'

export default function  Card({subtitle:{_id,title ,totalHours, tasks}}){


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
                          <li>{task.title}</li>
                          </div>
                       
                          
                        </div>
                     
                      

                       ))}

          



           </div>


        </StyleCard>
    )
}