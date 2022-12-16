import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

const HomeSearch = () => {
    const [courses,setCourses] = useState([])
    const [searchTerm,setSearchTerm] = useState(null)
    const [searched,setSearched] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/search?searchTerm=${searchTerm}`)
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
                {/* <div className="col-lg-3 align-self-center">
                    <fieldset>
                        <select name="area" className="form-select" aria-label="Area" id="chooseCategory" onchange="this.form.click()">
                            <option selected>All Areas</option>
                            <option value="New Village">New Village</option>
                            <option value="Old Town">Old Town</option>
                            <option value="Modern City">Modern City</option>
                        </select>
                    </fieldset>
                </div> */}
                <div className="col-lg-3 align-self-center">
                    <fieldset>
                        <input id={'input'} type="address" value={searchTerm} name="address" className="searchText" placeholder="Enter a course title, subject or an instructor name" autocomplete="on" required />
                    </fieldset>
                </div>
                {/* <div className="col-lg-3 align-self-center">
                    <fieldset>
                        <select name="price" className="form-select" aria-label="Default select example" id="chooseCategory" onchange="this.form.click()">
                            <option selected>Price Range</option>
                            <option value="$100 - $250">$100 - $250</option>
                            <option value="$250 - $500">$250 - $500</option>
                            <option value="$500 - $1000">$500 - $1,000</option>
                            <option value="$1000+">$1,000 or more</option>
                        </select>
                    </fieldset>
                </div> */}
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
                          <p>totalhours: {course.totalhours}</p>
                          <p>rating: {course.rating}</p>
                          <p>Price: {course.price}</p>
                      </div>
                      </div>
                ))}
              
{/*             
                <div className="card">
                <img src="https://placeimg.com/800/500/arch"/>
                <div className="content">
                    <h3>Architecture is wonderful.</h3>
                    <p>Override the digital divide with additional clickthroughs from DevOps.</p>
                </div>
                </div>
            
                <div className="card">
                <img src="https://placeimg.com/800/500/nature"/>
                <div className="content">
                    <h3>Be one with mother nature.</h3>
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
                </div>
                </div>
            
                <div className="card">
                <img src="https://placeimg.com/800/500/people"/>
                <div className="content">
                    <h3>There's billions of people, let's be excellent to them.</h3>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                </div>
                </div>
            
                <div className="card">
                <img src="https://placeimg.com/800/500/tech"/>
                <div className="content">
                    <h3>Technology is life...</h3>
                    <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                </div>
                </div>
            
                <div className="card">
                <img src="https://placeimg.com/800/500/any"/>
                <div className="content">
                    <h3>Do you feel lucky?</h3>
                    <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                </div>
                </div> */}
                
            </div>
        }
        </div>
        )
}

export default HomeSearch;