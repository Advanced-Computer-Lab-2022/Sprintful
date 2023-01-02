import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import CorporateTraineesNavBarCom from '../components/CorporateTraineesNavBarCom'

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
    const navigate=useNavigate();
    
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
                         <CorporateTraineesNavBarCom />
                     </div>
                    
                 </div>
               
             </div>
         </header>
           <hr/>
         {/* <!-- ***** Header Area End ***** --> */}

         <div className="main-banner">
         <div id="page-wrapper" style={{width: "1200px", height: "800px",left: "100px", margin: 70, background: "#DCDCDC"}} >
          <br/>
          <div id="page-inner" style={{width: "1100px", height: "700px", margin: 40, background: "white"}}>
             <br/>
             <div className="container">
               
                <div style={header}>Report your Problem</div>
                <br/>
  <br/>
      <div>
        <form className="create" onSubmit={handleSubmit}> 
      <div className="ChangeInstructorPassword">
          <div>
          <label style={{color: "black", fontFamily: "Times New Roman"}}>Subject: </label>
          <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                   }}
                        type="text"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        required/>

                     <label style={{color: "black", fontFamily: "Times New Roman"}}>Body: </label>
                     <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                   }}
                        type="text"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                        required/>

                    <label style={{color: "black", fontFamily: "Times New Roman"}}>Problem Type: </label>
                    <div style= {{width: "18em"}}>
                        <select value={type}  onChange={(e)=>setType(e.target.value)}>
                            {/* <option value="noType">Choose a type </option> */}
                            <option value="Technical">Technical</option>
                            <option value="Financial">Financial</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                <br/>
            </div>
      
        </div>
        <br/>
        <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    minWidth: "50px",
                                                    position: "relative",
                                                    left: "200px"}}> Report </button> 
                    <br/>
                    <br/>
                    <br/>
                    <br/>
        </form>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div  onClick={()=> navigate(`/api/corporate/getProfile?id=${id}`)} style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'left',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
             </div>
        </div>
        </div>
        
        </div>
        </div>

        <footer style={{height: "100px"}}>
                <div className="container" style={{height: "20px"}}>
                    <div className="row">
                    <div className="col-lg-4">
                            <div className="about">
                                    <img src="/upload/logo.png" alt="Homepage" style={{width: "180px", 
                                                                                    height: "70px"}}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="contact-us">
                                <h4 style= {{color: "black",  fontFamily: "Times New Roman"}}>Contact Us</h4>
                                <p style={{ fontFamily: "Times New Roman"}}>If you have any suggestions email us on info@cancham.org.eg</p>
                                <p style={{ fontFamily: "Times New Roman"}}>Call us +201001004070 from 9 AM to 4 PM</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-us">
                                <h4 style= {{color: "black",  fontFamily: "Times New Roman"}}>Location</h4>
                                <p style={{ fontFamily: "Times New Roman"}}>Villa 25 Mourad street off Orouba, Heliopolis، Almazah, Heliopolis, Cairo Governorate 11475</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sub-footer">
                                <label>© 2023 CANADIAN CHAMBER OF COMMERCE. ALL RIGHTS RESERVED.</label>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default ReportProblem;