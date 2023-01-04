import { useState } from "react"
import {useNavigate} from "react-router";
import axios from 'axios';
import InstructorNavBarCom from '../components/InstructorNavBarCom';
const CourseForm =() =>{

const[title,setTitle]=useState('') 
const [price ,setPrice]=useState('')
const [totalhours,setTotalHours]=useState('')
const [shortsummary,setShortSummary]=useState('')
const[previewvideolink,setPreviewVideoLink]=useState('')
const [discount,setDiscount]=useState('')
const [subject,setSubject]=useState('Computer Science')
const [contract,setContract] =useState(true)

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

const handleSubmit= async (e)=>{
    e.preventDefault()

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
     console.log(id)
    const response=  axios.post(`http://localhost:5000/api/courses?id=${id}`, { 
        title: title ,
        subject: subject,
        price: price,
        totalhours: totalhours,
        shortsummary: shortsummary,
        instructor: id,
        previewvideolink: previewvideolink,
        discount: discount
  
      },axiosConfig)
      .then(function (response) {
        // console.log(response);
        // console.log('Course added ',response.data)
        console.log(response.data[0])
        console.log(response.data[1])
        // contract =response.data[1];
        setContract(response.data[1])
  
      })
      .catch(function (error) {
        console.log(error);
      })

      const json =await response[0].json()
      if(response.ok){
        const courseid=json._id;
        console.log('Course added ',json)
        setTitle('')
        setPrice('')
        setSubject('Computer Science')
        setTotalHours('')
        setShortSummary('')
        setPreviewVideoLink('')
        setDiscount('')
     
        navigate(`/addSubtitle/${courseid}`);
       //  navigate('/api/admin/createInstructor');
        navigate(0);
       //  navigate(`/addSubtitle/${courseid}`);
      };

    }
    const style1 = { //.create input, .create textarea, .create select
      width: "100%",
      padding: "6px 10px",
      margin: "10px 0",
      border: "1px solid #ddd",
      boxSizing: "border-box",
      display: "block"
    }
   const style2 ={ // .create button
      background: "#f1356d",
      color: "#fff",
      border: "0",
      padding: "8px",
      borderRadius: "8px",
      cursor: "pointer"
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

  {/* <!-- ***** Preloader Start ***** --> */}
  <div id="js-preloader" className="js-preloader">
      <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>
  </div>
  {/* <!-- ***** Preloader End ***** --> */}
 
           
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
  <div id="page-wrapper" style={{width: "1200px", height: "1400px",left: "100px", margin: 70, background: "#DCDCDC"}} >
             <br/>
             <div id="page-inner" style={{width: "1050px", height: "1300px", margin: 40, background: "white"}}>
                <br/>
                <div className="container">
                <div style={header}>Add a new Course</div>
                <br/>
  <br/>
  <div>         
    {<form className="create" onSubmit={handleSubmit}>  
    <div className="AddCourse">    
    <br/>
            <label style={{color: "black", fontFamily: "Times New Roman"}}> Course Title: </label>
               <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                   }}
                 type="text"
                 onChange={(e)=>setTitle(e.target.value)}
                 value={title}
                 required
                 />
                 <br/>
        
            <label style={{color: "black", fontFamily: "Times New Roman"}}> Price (in LE): </label>
               <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                   }}
                 type="number"
                 onChange={(e)=>setPrice(e.target.value)}
                 value={price}
                 required
                 />
           <br/>
           <label style={{color: "black", fontFamily: "Times New Roman"}}> Total Hours: </label>
               <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                   }}
                 type="number"
                 onChange={(e)=>setTotalHours(e.target.value)}
                 value={totalhours}
                required
                 />
        <br/>
            <label style={{color: "black", fontFamily: "Times New Roman"}}> Short Summary: </label>
               <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                   }}
                 type="text"
                 onChange={(e)=>setShortSummary(e.target.value)}
                 value={shortsummary}
                 required
                 />
<br/>
            <label style={{color: "black", fontFamily: "Times New Roman"}}> Preview Video Link: </label>
               <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                   }}
                 type="text"
                 onChange={(e)=>setPreviewVideoLink(e.target.value)}
                 value={previewvideolink}
                 required
                 />
             <br/>
             <label style={{color: "black", fontFamily: "Times New Roman"}}> Discount: </label>
               <input style = {{ //.create input, .create textarea, .create select
                    padding: "6px 10px",
                    margin: "10px 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    display: "block",
                    fontSize:"14px",
                   }}
                 type="number"
                 onChange={(e)=>setDiscount(e.target.value)}
                 value={discount}
                 required
                 />
<br/>
             <label style={{color: "black", fontFamily: "Times New Roman"}}> Choose the Subject: </label>
                <select value={subject}  onChange={(e)=>setSubject(e.target.value)} style= {style1}>
                   <option value="Languages">Languages</option>
                   <option value="Computer Science">Computer Science </option>
                   <option value="Physics">Physics</option>
                   <option value="Business Adminstration">Business Adminstration</option>
                   <option value="Mathematics">Mathematics</option>
                </select>
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
                                                    width: "80px",
                                                    position: "relative",
                                                    left: "200px"}}> Add Subtitles </button> 
    </form>}

    </div> 
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
        <div  onClick={()=> navigate(`/instructor?id=${id}`)} style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'left',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
             </div>
                       
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
export default CourseForm