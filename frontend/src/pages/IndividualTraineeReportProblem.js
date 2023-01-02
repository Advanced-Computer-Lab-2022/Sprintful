import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import IndividualTraineeNavBarCom from '../components/IndividualTraineesNavBarCom'

const ReportProblem = () => {
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [type, setType] = useState("Technical")
    const[instructorId,setInstructorId]=useState('') 
    const[individualTraineeId,setIndividualTraineeId]=useState('') 
    const[corporateTraineeId,setCorporateTraineeId]=useState('')


    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);
    const header = {
      color: "darkRed",
      fontFamily: "Times New Roman",
      fontSize: "28px",
      textAlign: "center",
      fontWeight: "bold",
      
    };
    
    const handleSubmit = async(e) => {
       e.preventDefault()
       const params = new URLSearchParams(window.location.search);
       const id = params.get('id');
       console.log(id)

        const NewReport = {subject, body, type}
        const response = await fetch(`http://localhost:5000/api/report/addReport?id=${id}`, {
            method: 'POST',
            body :JSON.stringify(NewReport),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await  response.json()
        console.log('The problem has been reported', json)
            setSubject('')
            setBody('')
            setType('')

        if(response.ok){
            setSubject('')
            setBody('')
            setType('')
            console.log('The problem has been reported', json)
        }
    }

    return (
            <div>
        <div id="topbar" class="">
             <div class="container">
                 <div class="row">
                     <div class="col-md-6 p-0 text-center">
                         <ul class="top-menu">
                             <li><a href="tel:+201001004070">Phone:
                                     +201001004070</a></li>
                             <li><a href="mailto:info@cancham.org.eg">Email:
                                     info@cancham.org.eg</a></li>
                         </ul>
                     </div>
                     <div class="col-md-6 hidden-sm hidden-xs">
                         <div class="social-icons social-icons-colored-hover">
                             <ul>
                                 <li class="social-facebook"><a href="https://www.facebook.com/CanCham/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                 <li class="social-twitter"><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                 <li class="social-youtube"><a href="https://www.youtube.com/channel/UC1ykoFKsMjVQCx3TeLIXDbg" target="_blank"><i class="fa fa-youtube"></i></a></li>
                                 <li class="social-gplus"><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                 <li class="social-linkedin"><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <br/>
         <br/>
         <br/>
         
         {/* <!-- ***** Header Area Start ***** --> */}
         <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
             <div className="container">
                 <div className="row">
                  <div className="col-12" style={{height: "50px"}}>
                         <IndividualTraineeNavBarCom />
                     </div>
                    
                 </div>
               
             </div>
         </header>
           <hr/>
         {/* <!-- ***** Header Area End ***** --> */}
        <div className="create">
            <form onSubmit={handleSubmit}> 
                <h3> Report Your Problem </h3>
                    <label>Subject: </label>
                        <input style={{width: "10em"}}
                        type="text"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}/>

                     <label>Body: </label>
                        <input style={{width: "20em", height: "10em"}}
                        type="text"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}/>

                    <label>Problem Type: </label>
                    <div style= {{width: "18em"}}>
                        <select value={type}  onChange={(e)=>setType(e.target.value)}>
                            {/* <option value="noType">Choose a type </option> */}
                            <option value="Technical">Technical</option>
                            <option value="Financial">Financial</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                <br/>
                     <button> Report </button> 
            </form>
        </div>
        </div>
    )
}
export default ReportProblem;