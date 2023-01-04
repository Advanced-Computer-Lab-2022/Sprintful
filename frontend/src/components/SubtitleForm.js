import { useState } from "react"
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router";
import axios from 'axios';
import InstructorNavBarCom from '../components/InstructorNavBarCom';


const SubtitleForm =()=>{
    const[title,setTitle]=useState('');
    const[totalHours,setTotalHours]= useState('')
    const[content,setContent]=useState('')
    const {courseid}=useParams();

    const header = {
      color: "darkRed",
      fontFamily: "Times New Roman",
      fontSize: "28px",
      textAlign: "center",
      fontWeight: "bold"
      
    };
    const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
       console.log(id)
  
  
  const navigate=useNavigate();


    //Handling adding another subtitle
    const handleAddAnotherSubtitle=async()=>{
      //getting the course id from the URL /:courseid  
   

      const subtitle={title:title ,totalHours:totalHours,course:courseid,content:content}
     

      const response=await axios.post(`http://localhost:5000/api/subtitles/addSubtitle/${courseid}`,subtitle)

      if(response.ok){
        console.log("subtitle added",response.data)
        setTitle('');
        setTotalHours('');
        setContent('');
      }

     /* else{
        console.log("ERROR")
      } */

    }


    //Handling done with the Subtitles 
    const handleDone= async()=>{
      //submitting the subtitle Normally (same as handleAddAnotheSubtitle)
     const subtitle={title:title ,totalHours:totalHours,course:courseid,content:content}

      const response=await axios.post(`http://localhost:5000/api/subtitles/addSubtitle/${courseid}`,subtitle)

      // if(response.ok){
        
      //   setTitle(''); 
      //   setTotalHours('');
      //   setContent('');
      // }
 
      console.log("subtitle added",response.data)
      setTitle('');
        setTotalHours('');
        setContent('');

     //Redirecting to the course view page  //take course id from url params in order to redirect to the course view page 

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
              <div className="col-12">
                  <InstructorNavBarCom />
              </div>
          </div>
      </div>
  </header>
  <hr/>
  {/* <!-- ***** Header Area End ***** --> */}

  <div className="main-banner">
  <div id="page-wrapper" style={{width: "1200px", height: "900px",left: "100px", margin: 70, background: "#DCDCDC"}} >
             <br/>
             <div id="page-inner" style={{width: "1100px", height: "800px", margin: 40, background: "white"}}>
                <br/>
                <div className="container">
                <div style={header}>Add a new Subtitle</div>
                <br/>
  <br/>
  <div>         
   
        <form className="create" onSubmit={handleAddAnotherSubtitle}>  
        <div className="AddSubtitle">    
    <br/>
             <label style={{color: "black", fontFamily: "Times New Roman"}}>Subtitle Title:    (in the from of WEEK1:xxx)</label>
               <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                   }}
                 type="text"
                 onChange={(e)=>setTitle(e.target.value)}   //e--> the event   target is the input "the element itself"  value-->value inside the HTML element (value inside the text box)
                 value={title}
                 required
                 />
                  <br/>

              <label style={{color: "black", fontFamily: "Times New Roman"}}>Total Hours: </label>
               <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                   }}
                 type="number"
                 onChange={(e)=>setTotalHours(e.target.value)}   //e--> the event   target is the input "the element itself"  value-->value inside the HTML element (value inside the text box)
                 value={totalHours}
                 required
                 />
                  <br/>


              <label>Content: </label>
               <textarea style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                   }}
                 onChange={(e)=>setContent(e.target.value)}   //e--> the event   target is the input "the element itself"  value-->value inside the HTML element (value inside the text box)
                 value={content}
                 required >
                 </textarea>
                 </div>
            <br/>
            <br/>
            <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    width: "130px",
                                                    position: "relative",
                                                    left: "200px"}}> Add Another Subtitle </button>

           </form>
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
                                                    width: "70px",
                                                    position: "relative",
                                                    left: "800px"}} onClick={handleDone}>Done</button>  


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
        {/* <div  onClick={()=> navigate(`/instructor?id=${id}`)} style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'left',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Cancel </a> 
             </div> */}



             </div>
                </div>
            </div>
            <footer style={{height: "100px"}}>
                <div className="container" style={{height: "20px"}}>
                 
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
            </footer>
      
      </div>
      )

}


export default SubtitleForm;