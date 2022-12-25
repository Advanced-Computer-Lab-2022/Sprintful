import { useState } from "react"
import {useNavigate} from "react-router";
import axios from 'axios';
import InstructorHomeNavBar from '../components/InstructorHomeNavBar';
const CourseForm =() =>{

const[title,setTitle]=useState('') 
const [price ,setPrice]=useState('')
const [totalhours,setTotalHours]=useState('')
const [shortsummary,setShortSummary]=useState('')
const[previewvideolink,setPreviewVideoLink]=useState('')
const [discount,setDiscount]=useState('')
const [subject,setSubject]=useState('Computer Science')
const [contract,setContract] =useState(true)


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
                  <InstructorHomeNavBar />
              </div>
          </div>
      </div>
  </header>
  {/* <!-- ***** Header Area End ***** --> */}
  <div className="main-banner">
                <div className="container">
                    <div className="row">
                    <div className="create">
    {<form onSubmit={handleSubmit}>  
         <h3>Add a new Course</h3>
            <label>Course Title:</label>
               <input 
                 type="text"
                 onChange={(e)=>setTitle(e.target.value)}
                 value={title}
                 style= {style1}
                 />
        
            <label>Price (in LE):</label>
               <input 
                 type="number"
                 onChange={(e)=>setPrice(e.target.value)}
                 value={price}
                 style= {style1}
                 />
           
           <label>total hours  :</label>
               <input 
                 type="number"
                 onChange={(e)=>setTotalHours(e.target.value)}
                 value={totalhours}
                 style= {style1}
                 />
        
            <label>Short Summary</label>
               <input 
                 type="text"
                 onChange={(e)=>setShortSummary(e.target.value)}
                 value={shortsummary}
                 style= {style1}
                 />

            <label>Preview video link</label>
               <input 
                 type="text"
                 onChange={(e)=>setPreviewVideoLink(e.target.value)}
                 value={previewvideolink}
                 style= {style1}
                 />
             
             <label>discount:</label>
               <input 
                 type="number"
                 onChange={(e)=>setDiscount(e.target.value)}
                 value={discount}
                 style= {style1}
                 />

             <label>choose Subject</label>
                <select value={subject}  onChange={(e)=>setSubject(e.target.value)} style= {style1}>
                   <option value="Languages">Languages</option>
                   <option value="Computer Science">Computer Science </option>
                   <option value="Physics">Physics</option>
                   <option value="Business Adminstration">Business Adminstration</option>
                   <option value="Mathematics">Mathematics</option>
                </select>
              <button style ={style2}>Add Subtitle</button>
    </form>}

    </div>    
                        {/* <div className="col-lg-12">
                            <div className="top-text header-text">
                                <h6>Over 36,500+ Courses</h6>
                                <h2>Find Interesting Online Courses </h2>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-10 offset-lg-1">
                            <ul className="categories">
                                <li><a href="category.html"><span className="icon"><img src="assets/images/search-icon-01.png" alt="Home" /></span> Apartments</a></li>
                                <li><a href="listing.html"><span className="icon"><img src="assets/images/search-icon-02.png" alt="Food" /></span> Food &amp; Life</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-03.png" alt="Vehicle" /></span> Cars</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-04.png" alt="Shopping" /></span> Shopping</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-05.png" alt="Travel" /></span> Traveling</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about">
                                <div className="logo">
                                    <img src="assets/images/black-logo.png" alt="Plot Listing" />
                                </div>
                                <p>If you consider that <a rel="nofollow" href="https://templatemo.com/tm-564-plot-listing" target="_parent">Plot Listing template</a> is useful for your website, please <a rel="nofollow" href="https://www.paypal.me/templatemo" target="_blank">support us</a> a little via PayPal.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="helpful-links">
                                <h4>Helpful Links</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li><a href="#">Categories</a></li>
                                            <li><a href="#">Reviews</a></li>
                                            <li><a href="#">Listing</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Awards</a></li>
                                            <li><a href="#">Useful Sites</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-us">
                                <h4>Contact Us</h4>
                                <p>27th Street of New Town, Digital Villa</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="#">010-020-0340</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <a href="#">090-080-0760</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sub-footer">
                                <p>Copyright © 2021 Plot Listing Co., Ltd. All Rights Reserved.
                                    <br />
                                    Design: <a rel="nofollow" href="https://templatemo.com" title="CSS Templates">TemplateMo</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

  
</div>     
)
}
export default CourseForm