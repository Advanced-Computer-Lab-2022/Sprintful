import React, { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MostPopular from '../components/MostPopular';


const HomeSearchInstructor = () => {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const [courses,setCourses] = useState([])
    const [searchTerm,setSearchTerm] = useState(null)
    const [searched,setSearched] = useState(false)

    const[price,setPrice] = useState(null)
    const [subject, setSubject] = useState(null)
    const [rating, setRating] = useState(null)
    const [filterData,setFilterData]=useState([]);
    const[popular, setPopular]= useState(false)
    const [students, setStudents] = useState(null)

    const handleFilter =  async(e) =>{
        e.preventDefault()
        var a = document.getElementById('rating').value  ;
        if(a == 6){
        setPopular(true);
        setRating(null);
        }
        else{
        setRating(a)
        }
        var b = document.getElementById('subject').value  ;
        setSubject(b)
        var c = document.getElementById('price').value  ;
        setPrice(c)
        setCourses([])
      }

    useEffect(() => {

        
        const response = async() =>{
            
            console.log("hello")
            console.log(price +" " + subject + " " + rating)
          await axios.post(`http://localhost:5000/api/courses/filter?subject=${subject}&rating=${rating}&price=${price}`)
          .then((res) => { 
                const course = res.data
                if(res.status===200){
                  console.log("check success")
                  console.log(course)
                  setFilterData(course)
                }
                else{
                  console.log("entered empty check")
                  setFilterData([])
                }
      
            })
    }
          response()
          setPrice(null)
          setSubject(null)
          setRating(null)
          setPopular(false)

        axios.get(`http://localhost:5000/api/courses/search?searchTerm=${searchTerm}`)
        .then((res) => {
            console.log(res.data)
            setCourses(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
        setSearchTerm(null)
    }, 
    [searchTerm,searched,price,subject,rating,popular, filterData ]);

    const handleOnChange = async(e) =>{
        e.preventDefault()
        var a = document.getElementById('input').value  ;
        setSearchTerm(a)
        setSearched(true);
        setFilterData([])
        console.log(searchTerm)
    }

    const styleFilterForm = {
        position: "relative",
        top: "-40px",
        left: "550px",
        height: "70px",
        width: "440px"
        };
    
    const styleFilterButton ={
        height: "70px",
        left:"70px",
        width:"110px"
    }
    const stylePrice ={
        width : "117px",
        fontSize: "12px",
    }
    const styleSubject ={
        width : "117px",
        fontSize: "12px",
        position: "relative",
        left:"20px"
    }
    const styleRating ={
        width : "117px",
        fontSize: "12px",
        position: "relative",
        left:"40px"
    }
    return (
        <div>
            {/* <MostPopular/> */}
        { <form id="search-form" name="gs" method="submit" role="search" action="#">
            <div className="row">
                <div className="col-lg-3 align-self-center">
                    <fieldset>
                        <input id={'input'} type="address" value={searchTerm} name="address" className="searchText" placeholder="Enter a course title, subject or lecturer" autocomplete="on" required style={{width:"300px", alignItems:"start"}}/>
                    </fieldset>
                </div>
                <div className="col-lg-3">
                    <fieldset>
                        <button id="main-button" onClick={handleOnChange} style={{width:"70px"}}><i className="fa fa-search"></i></button>
                    </fieldset>
                </div>
            </div>
        </form> }
        <div className="col-lg-12">
        <div>
    { <form id="search-form" name="gs" method="submit" role="search" action="#"  style={styleFilterForm}>
        <div className="row">
            <div className="col-lg-3 align-self-center">
                <fieldset>
                    <select  id={'price'}  value={price} name="area" className="form-select" aria-label="Area"  onchange="this.form.click()" style={stylePrice}> 
                    {/* id="chooseCategory" */}
                     {/* assuming price range is 0-5000 */}
                        <option selected disabled key="0" value="null"> Select a price</option> 
                        <option key="1" value="0" >FREE </option>
                        <option key="2" value="1000" >less than 1000</option>
                        <option key="3" value="3000" >less than 3000</option>
                        <option key="4" value="5000">less than 5000</option>
                        <option key="5" value="99999999">more than 5000</option>
                    </select>
                </fieldset>
            </div>
            <div className="col-lg-3 align-self-center">
                <fieldset>
                    <select id={'subject'} value={subject} name="price" className="form-select" aria-label="Default select example" onchange="this.form.click()" style={styleSubject}>
                        {/* id="chooseCategory" */}
                        <option key="0" value="null" selected disabled> Select a subject</option>
                        <option key="1" value="Computer Science">Computer Science</option>
                        <option key="2" value="Languages">Languages</option>
                        <option key="3" value="Physics">Physics</option>
                        <option key="4" value="Business Administration">Business Administration</option>
                        <option key="5" value="Mathematics">Mathematics</option>
                    </select>
                </fieldset>
            </div>
            <div className="col-lg-3 align-self-center">
                <fieldset>
                    <select  id={'rating'} value={rating} name="price" className="form-select" aria-label="Default select example" onchange="this.form.click()" style={styleRating}>
                    {/* id="chooseCategory" */}
                         <option key="-1" value="null" selected disabled> Select a rating</option>
                        {/* <option key="0" value="0"> 0 Stars</option> */}
                        <option key="1" value="1">1 Star </option>
                        <option key="2" value="2">2 Stars</option>
                        <option key="3" value="3">3 Stars</option>
                        <option key="4" value="4">4 Stars</option>
                        <option key="5" value="5">5 Stars</option>
                        {/* <option key="6" value="6" >Most popular</option> */}
                    </select>
                </fieldset>
                <br/>

            </div>
            <div className="col-lg-3">
                <fieldset>
                    {/* <button id="main-button" onClick={(e)=>handlePopular} >View Most Popular</button> */}
                    <button id="main-button" onClick={handleFilter} style={styleFilterButton}> Apply</button>
                </fieldset>
            </div>
        </div>
    </form> }
    { 
        <div className="card-container">
            {filterData  && filterData.map((course) =>( 
                  <div className="card" onClick = { async() => { 
                    const response=await axios.get(`http://localhost:5000/api/instructor/checkmyownCourse/${id}/${course._id}`)
                    const found=response.data.found;
    
    
                    if(found){
                    navigate(`/api/courses/getCourse/${course._id}/InstructorCourse?id=${id}`) }

                    else{
                      navigate(`/api/courses/getCourse/${course._id}/Instructor?id=${id}`)  

                    }

                    
                    
                    } }>
                  <img src="assets/images/courseCard.jpg"/>
                  <div className="content">
                      <h3> {course.title} </h3>
                      <p>totalhours: {course.totalhours}</p>
                      <p>rating: {course.rating}</p>
                      <p>Price: {course.price}</p>
                  </div>
                  </div>
            ))}
                      
        </div>
    }
    </div> 
        </div>
        <MostPopular/>
        { searched &&
            
            <div className="card-container">
                {courses  && courses.map((course) =>( 
                      <div className="card" onClick = { async() => { 
                        const response=await axios.get(`http://localhost:5000/api/instructor/checkmyownCourse/${id}/${course._id}`)
                        const found=response.data.found;
        
        
                        if(found){
                        navigate(`/api/courses/getCourse/${course._id}/InstructorCourse?id=${id}`) }
    
                        else{
                          navigate(`/api/courses/getCourse/${course._id}/Instructor?id=${id}`)  
    
                        }
                        
                        
                        
                        } }>
                        {/* :courseid */}
                      <img src="assets/images/courseCard.jpg"/>
                      <div className="content">
                          <h3> {course.title} </h3>
                          <p>totalhours: {course.totalhours}</p>
                          <p>rating: {course.rating}</p>
                          <p>Price: {course.price}</p>
                      </div>
                      </div>
                ))}
              
                
            </div>
        }

        </div>
    )
}

export default HomeSearchInstructor;