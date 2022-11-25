import "./SearchBar.css"
import SearchIcon from '@material-ui/icons/Search';
import {useState,useEffect} from 'react'
import { json, useSearchParams } from "react-router-dom";
const mongoose = require('mongoose')

function Searchbar({placeholder}){
    const [courses,setCourses] = useState([])
    const [searchTerm,setSearchTerm] = useState(null)
    
    useEffect( ()=>{
        const fecthCourses  =async () =>{
             let response1 =await fetch(`/api/courses/search?title=${searchTerm}`)
             let json1 = await response1.json()       
             let response2 =await fetch(`/api/courses/search?subject=${searchTerm}`)
             let json2 = await response2.json()
             let response3 =await fetch(`/api/courses/search?instructorName=${searchTerm}`)
             let json3  = await response3.json()
              const arr =[json1,json2,json3]
              setCourses(arr)
              console.log(arr)
        }
        
        fecthCourses()
    }, [searchTerm])

  

    const handleOnChange =() =>{
        var a = document.getElementById('input').value  ;
        setSearchTerm(a)
        console.log(searchTerm)


    }

    return(
        <div className="search">
            <div className="searchInputs">
                <input id={'input'} value={searchTerm} type="text" placeholder={placeholder} />
                <div className="searchIcon">
                    <button onClick={handleOnChange}> Search </button>
                </div>
            </div>
            <div className='courses'>
            {courses[0]!=null  && courses[0].map((course) => (
                <div className="box" key={course._id}>
                <p>{course.title}</p>
                <p>Course Id:{course._id}</p>
                <p>totalhours: {course.totalhours}</p>
                <p>rating: {course.rating}</p>
                <button >View Course Details</button>


              </div>
            ))}
            {courses[1]!=null  && courses[1].map((course) => (
                <div className="box" key={course._id}>
                <p>{course.title}</p>
                <p>Course Id:{course._id}</p>
                <p>totalhours: {course.totalhours}</p>
                <p>rating: {course.rating}</p>
                <button >View Course Details</button>


              </div>
            ))}
            {courses[2]!=null  && courses[2].map((course) => (
                <div className="box" key={course._id}>
                <p>{course.title}</p>
                <p>Course Id:{course._id}</p>
                <p>totalhours: {course.totalhours}</p>
                <p>rating: {course.rating}</p>
                <button >View Course Details</button>


              </div>
            ))}
        </div>
        </div>
    )
}
export default Searchbar