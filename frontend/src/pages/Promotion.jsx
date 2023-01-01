import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Popup from 'react';
//import 'reactjs-popup/dist/index.css';

export default function Promotion() {
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
                    console.log(res.data);
                    setCourses(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);

    const handleAll = async() => {
        
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
        <div>
                <form>
                        <label> Promotion: </label>
                        <input type="text" name="promotion" value={percentage} onChange={(e) => setPercentage(e.target.value)} style={{width:"150px" , height:"40px"}}/>


                        <label> Duration:</label>
                        <input type="text" name="period" value={duration} onChange={(e) => setDuration(e.target.value)} style={{width:"150px" , height:"40px"}}/>

                        {/* <button onClick={() => addPromotion()}> Add promotion </button> */}
                    </form>

                    <button onClick={()=>handleAll} style={{background:"maroon", width:"130px"}}>Set for All Courses</button>

            {courses && (
                <div className="Promotion">
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
                                <label style={{fontSize:"16px"}}>{course.title}</label>
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
        </div>
    )
}
