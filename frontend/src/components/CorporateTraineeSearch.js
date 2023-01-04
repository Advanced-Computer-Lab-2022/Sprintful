import React, { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CorporateTraineeSearch = () => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const navigate = useNavigate();
    const [courses,setCourses] = useState([])
    const [searchTerm,setSearchTerm] = useState(null)
    const [searched,setSearched] = useState(false)

    const [subject, setSubject] = useState(null)
    const [rating, setRating] = useState(null)
    const [filterData,setFilterData]=useState([]);

    const handleFilter =  async(e) =>{
        e.preventDefault()
        var a = document.getElementById('rating').value  ;
        setRating(a)
        var b = document.getElementById('subject').value  ;
        setSubject(b)
        setCourses([])
      }

    useEffect(() => {
        const response = async() =>{
            console.log("hello")
            console.log(subject + " " + rating)
            await axios.post(`http://localhost:5000/api/courses/filterCorporate?subject=${subject}&rating=${rating}`)
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
        setSubject(null)
        setRating(null)

        axios.get(`http://localhost:5000/api/courses/corporate/search?searchTerm=${searchTerm}`)
        .then((res) => {
            console.log(res.data)
            setCourses(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
        setSearchTerm(null)
    }, [searchTerm,searched,subject,rating,filterData]);

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
    width: "340px"
 };

const styleFilterButton ={
    height: "70px",
    left:"10px"
}
const styleSubject ={
    width : "117px",
    fontSize: "12px",
    position: "relative",
    left:"-100px"
}
const styleRating ={
    width : "117px",
    fontSize: "12px",
    position: "relative",
    left:"-60px"
}
    return (
        <div>
        { <form id="search-form" name="gs" method="submit" role="search" action="#">
            <div className="row">
                <div className="col-lg-3 align-self-center">
                    <fieldset>
                        <input id={'input'} type="address" value={searchTerm} name="address" className="searchText" placeholder="Enter a course title, subject or an instructor name" autocomplete="on" required />
                    </fieldset>
                </div>
                <div className="col-lg-3">
                    <fieldset>
                        <button className="main-button" onClick={handleOnChange}><i className="fa fa-search"></i></button>
                    </fieldset>
                </div>
            </div>
        </form> }
        <div className="col-lg-12">
        <div>

    { <form id="search-form" name="gs" method="submit" role="search" action="#"  style={styleFilterForm}>
        <div className="row">
            <div className="col-lg-3 align-self-center">
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
                    </select>
                </fieldset>
            </div>
            <div className="col-lg-3">
                <fieldset>
                    <button id="main-button" onClick={handleFilter} style={styleFilterButton}> Apply</button>
                </fieldset>
            </div>
        </div>
    </form> }
    { 
        <div className="card-container">
            {filterData  && filterData.map((course) =>( 
                  <div className="card"  onClick = { async() => { 
                    const response=await axios.get(`http://localhost:5000/api/corporateTrainee/checkmyownCourse/${id}/${course._id}`)
                    const found=response.data.found;
    
    
                    if(found){
                    navigate(`/api/courses/getCourse/${course._id}/CTN/${id}`) }

                    else{
                      navigate(`/api/courses/getCourse/${course._id}/CTR/${id}`)  

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
        { searched &&
            <div className="card-container">
                {courses  && courses.map((course) =>( 
                      <div className="card" onClick = { async() => { 
                        const response=await axios.get(`http://localhost:5000/api/corporateTrainee/checkmyownCourse/${id}/${course._id}`)
                        const found=response.data.found;
        
        
                        if(found){
                        navigate(`/api/courses/getCourse/${course._id}/CTN/${id}`) }
    
                        else{
                          navigate(`/api/courses/getCourse/${course._id}/CTR/${id}`)  
    
                        }
    
                        
                        
                        } }>
                      <img src="assets/images/courseCard.jpg"/>
                      <div className="content">
                          <h3> {course.title} </h3>
                          <p>totalhours: {course.totalhours}</p>
                          <p>rating: {course.rating}</p>
                      </div>
                      </div>
                ))}                
            </div>
        }
        </div>
    )
}

export default CorporateTraineeSearch;