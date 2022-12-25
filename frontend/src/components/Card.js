import {StyleCard} from './styles/Card.style'

export default function  Card({subtitle:{_id,title ,totalHours, tasks}}){


    return (
        <StyleCard>
            <div>

            <h5>{title}</h5>
            <h6>total hours :{totalHours}</h6>
            <br></br>


            </div>
            {tasks.map((task)=>(
                    
                        <div key={task._id}>
                          <p>{task.title}</p>
                          
                        </div>
                     
                      

                       ))}

           <div>



           </div>


        </StyleCard>
    )
}