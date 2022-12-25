import {StyleCard} from './styles/Card.style'

export default function  Card({subtitle:{_id,title ,totalHours, tasks}}){


    return (
        <StyleCard>
            <div>

            <h5>{title}</h5>
            <h6>total hours :{totalHours}</h6>


            </div>
            {tasks.map((task)=>(
                        <div key={task._id}>
                          <h6>{task.title}</h6>
                          <br></br>
                        </div>

                       ))}

           <div>



           </div>


        </StyleCard>
    )
}