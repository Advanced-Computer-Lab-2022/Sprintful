import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Popup from 'react';
//import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';

export default function Promotion() {
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

        

    const [courses, setCourses] = useState(null);
    // const [courseschecked, setCoursesChecked] = useState(null);
    let courseschecked = [];
    const [checked, setChecked] = useState(false);
    const [percentage, setPercentage] = useState(null);
    const [duration, setDuration] = useState(null);
    const [done, setDone] = useState(false);
    const optionClicked = (courseid) => {
        
        console.log(checked)
        console.log("hello")
        console.log(courseid);
        courseschecked = courseschecked.concat(courseid);
        console.log(courseschecked);

      };

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:5000/api/courses`)

                .then((res) => {
                    //console.log(res.data);
                    setCourses(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);

    const handleAll = async() => {
        let ids=[];
        for(let i=0; i<courses.length; i++){
            ids.push(courses[i]._id);
        }
        for(let i=0; i<ids.length; i++){
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
              };
       
            axios.put(`http://localhost:5000/api/courses/addPromotion/${ids[i]}`, { //?id=${id}
               discount: percentage,
               discountExpireAt: duration,
               
          },axiosConfig)
       
          .then(function (response) {
            console.log(response.data);
            console.log(response.data[0])
            console.log(response.data[1])      
             setDone(true);
          })
          .catch(function (error) {
            console.log(error);
          });
       
        }
    }

    const handlePromotion = async(courseid) => {
       // e.preventDefault()

       let axiosConfig = {
         headers: {
             'Content-Type': 'application/json;charset=UTF-8',
             "Access-Control-Allow-Origin": "*",
         }
       };

     axios.put(`http://localhost:5000/api/courses/addPromotion/${courseid}`, { //?id=${id}
        discount: percentage,
        discountExpireAt: duration,
        
   },axiosConfig)

   .then(function (response) {
        //setInstructor(response.data);
        console.log(response.data);
      console.log(response.data[0])
      console.log(response.data[1])
      setDone(true);
   })
   .catch(function (error) {
     console.log(error);
   });

    }

    return (
        <div style= {{  borderLeft: "2px solid silver",
        height: "3300px",
        //position:"absolute",
        //  left: "50%"
        borderRight: "2px solid silver",
        height: "3300px",
      }}>
            <nav className="navbar navbar-default navbar-cls-top " role="navigation" style = {{marginBottom: '0', background: "silver"}}> 
            <a class="salata" data-dark-logo="/upload/logo.png" syle={{position: "relative"}}>

<img src="/upload/logo.png" alt="Homepage" style={{width: "140px", 
                                                    height: "60px",
                                                    marginRight: "900px"}}/>
</a>
         {/* <div className="navbar-header"> */}
             {/* <a  style={{color: 'white',
                         fontWeight: "bold", 
                         float: "left",
                         fontSize: '25px',
                         testAlign: "left"}}>Canadian Chamber of Commerce</a>  */}
         {/* </div> */}
 <div  style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'right',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust">Logout</a> 
 
 </div>
     </nav>

     <hr/> 
     <br/>  
     <div style={header}>Set a Promotion</div>

                <form className="create">
                        <label style={{color: "black", fontFamily: "Times New Roman"}}> Promotion: </label>
                        <input  style = {{ //.create input, .create textarea, .create select
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #ddd",
                            boxSizing: "border-box",
                            display: "block",
                            fontSize:"14px",
                        }}
                        type="text" 
                        name="promotion" 
                        value={percentage} 
                        onChange={(e) => setPercentage(e.target.value)} 
                        required/>


                        <label style={{color: "black", fontFamily: "Times New Roman"}}> Duration:</label>
                        <input style = {{ //.create input, .create textarea, .create select
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #ddd",
                            boxSizing: "border-box",
                            display: "block",
                            fontSize:"14px",
                        }}
                        type="text" name="period" value={duration} onChange={(e) => setDuration(e.target.value)} required/>

                        {/* <button onClick={() => addPromotion()}> Add promotion </button> */}
                    
                    <br/>

                        <button style={{backgroundColor:"#dc3545", 
                                                    borderRadius:"3px", 
                                                    color: 'white', 
                                                    // padding: '15px 50px 5px 50px',
                                                    float: 'center',
                                                    fontSize: '10px',
                                                    minHeight:"30px", 
                                                    width: "100px",
                                                    position: "relative",
                                                    left: "200px"}} onClick={()=>handleAll()}   > Set for ALL courses </button> 

                    {/* <button  style={{background:"maroon", width:"120px", height:"40px", color:"white"}}>Set for All Courses</button> */}
                    </form>
                    <br/>
                    <br/>
                    <br/>
            {courses && (
                <div className="Promotion" style= {{marginLeft: "30px"}}>
                    {courses.map((course) => {
                        return (
                            <div>
                                {/* <input type="checkbox" id={course._id}> */}
                                <input type="checkbox"
                                    id={course._id} value={course.title}
                                    // checked={courseschecked}
                                    // onChange={(e) => setCoursesChecked(e.target.id)}
                                    // onChange={(e) => courseschecked.push(e.target.id)}
                                    // onChange={(e) => optionClicked(e.target.id)}
                                    style={{width:"14px", height:"14px"}}
                                    // onClick={() => setChecked(current => !current)}
                                    // onChange={(e) => optionClicked(e.target.id)}
                                    onClick={() => handlePromotion(course._id)}
                                />
                                <label style={{fontSize:"16px",color: "black", fontFamily: "Times New Roman"}}>{course.title}</label>
                                <br/>
                                {/* <Popup trigger={<button> Trigger</button>} position="right center">
                                <div>Promotion added successfully!</div>
                                </Popup> */}
                            </div>

)
})}
{done && 
<label style={{color:"green"}}> promotion added successfully!</label> }

                </div>

                
            )}



<div  onClick={()=> navigate(`/admin?id=${id}`)} style={{color: 'white', 
                            padding: '15px 50px 5px 50px',
                            float: 'left',
                            fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
                            </div>

                            <br/>
                    <br/>
                    <br/>
                    <br/>

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
