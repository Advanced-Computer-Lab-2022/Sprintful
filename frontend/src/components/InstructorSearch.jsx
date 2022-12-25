// THIS COMPONENT CAN BE DELETED SAFELY AS IT WAS ALREADY ADDED TO INSTRUCTORMYCOURSES COMPONENT

import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

const InstructorSearch = () => {
    const [courses,setCourses] = useState([])
    const [searchTerm,setSearchTerm] = useState(null)
    const [searched,setSearched] = useState(false)
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/instructor/search?id=${id}&searchTerm=${searchTerm}`)
        .then((res) => {
            console.log(res.data)
            setCourses(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
        setSearchTerm(null)
    }, [searchTerm,searched]);

    const handleOnChange = async(e) =>{
        e.preventDefault()
        var a = document.getElementById('input').value  ;
        setSearchTerm(a)
        setSearched(true);
        console.log(searchTerm)
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
                        <button id="main-button" onClick={handleOnChange}><i className="fa fa-search"></i> Search Now</button>
                    </fieldset>
                </div>
            </div>
        </form> }
        { searched &&
            <div className="card-container">
                {courses  && courses.map((course) =>( 
                      <div className="card">
                      <img src="assets/images/courseCard.jpg"/>
                      <div className="content">
                          <h3> {course.title} </h3>
                          {/* <p>totalhours: {course.totalhours}</p>
                          <p>rating: {course.rating}</p>
                          <p>Price: {course.price}</p> */}
                      </div>
                      </div>
                ))}             
            </div>
        }
        </div>
        )
}

export default InstructorSearch;