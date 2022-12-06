import axios from 'axios'
import "./FilterDropdown.css"
import {useState, useEffect} from 'react'

const FilterPrice = () => {
  const [courses,setCourses] = useState([])
  const[price,setPrice] = useState(1000000)
  const[filteredCourses,setFilteredCourses] = useState([])
  //const [filterData,setFilterData]=useState([]);
  // const params = new URLSearchParams(window.location.search);
  // console.log(params.get('price'))

  useEffect( ()=>{
    const fecthCourses =async () =>{
        await axios.get('http://localhost:5000/api/courses/').then(
       (res) => { 
           const courses = res.data
           console.log(courses)
           setCourses(courses)
       }
        );
    }
    fecthCourses()
}, [])


const handleOption = async (event) =>{
  const priceSelected = event.target.value
  setPrice(priceSelected)
  await axios.post(`http://localhost:5000/api/courses/filterPrice?price=${price}`).then(
    (res) => { 
        console.log(price)
        const courses = res.data
        console.log("hello")
        console.log(courses)
        setFilteredCourses(courses)
    }
     );
}

const viewCourse = async(event) =>{
  
}

//const handleFilter = async (event) =>{
 
//var x = document.getElementById("optionList");
//var value = x.value;
//value.parseInt();
//console.log(value)
//   const response = await axios.get(`http://localhost:5000/api/courses/filterPrice?price=${value}`,{
//     method: 'POST'
// })
//   courses = await response.json()
//   //console.log(data)
//   response.json(courses)
//   //setCourses(courses)
//   if(response.ok){
//     setCourses(courses)
//   }

// await axios.get('http://localhost:5000/api/courses/filterPrice').then(
//            (res) => { 
//                const courses = res.data
//                console.log(courses)
//                setCourses(courses)
               
//            }
//             );
//}


return(
  <div classname="filter">
      <div class="priceList">
        <select class="list"
          onChange={(e) => handleOption(e)}
        >
          {/* assuming price range is 0-5000 */}
          <option selected disabled key="0" value="-1"> Select a price</option> 
          <option key="1" value="0" >FREE </option>
          <option key="2" value="1000" >less than 1000</option>
          <option key="3" value="3000" >less than 3000</option>
          <option key="4" value="5000">less than 5000</option>
          <option key="5" value="99999999">more than 5000</option>
        </select>
      </div>

      <div class="subjectList">
        <select class="list">
          <option selected disabled> Choose a course' subject</option>
          {courses.map((op) => (
            <option key={op.id} value={op.id}> {op.subject} </option>
          ))}  
        </select>
      </div>

      <div class="ratingList">
        <select class="list">
          <option selected disabled> Choose a course' rating</option>
          <option key="1" value="1">1 Star </option>
          <option key="2" value="2">2 Stars</option>
          <option key="3" value="3">3 Stars</option>
          <option key="4" value="4">4 Stars</option>
          <option key="5" value="5">5 Stars</option>
        </select> 
      </div>

      <div class="results">
        <ul>
        {filteredCourses.map((course) => (
          <li onClick={viewCourse}>{course.title}</li>
        ))}
        </ul>
      </div>

  </div>
)
}


export default FilterPrice






























// import "./FilterDropdown.css"
// import React, { useEffect, useState } from "react";

// function Dropdown(selected, setSelected) {
//     const [isOpen, setIsOpen] = useState(false)
//     const [courses, setCourses] = useState([])
//     const options = ["FREE", "100-500", "500-1000", "1000+"];
//     //const toggle = () => setIsOpen(!isOpen)
//     useEffect( ()=>{
//         const fecthCourses =async () =>{
//             const response =await fetch('/api/courses/filterP')
//             const json = await response.json()

//             if(response.ok){
//                 setCourses(json)
//             }
//         }

//         fecthCourses()
//     }, [])

//     return (
//         <div className= "dropdown">
//             <div className= "dropdown-btn" onClick={e => setIsOpen(!isOpen)}>
//                 {selected}
//                 <span className="fas fa-caret-down"></span>
//                 </div>
//                 {isOpen && (
//                     <div className="dropdown-content">
//                         {options.map(option => (
//                         <div onClick={e => {
//                             setSelected(option)
//                             setIsOpen(false)
//                         }}
//                         className="dropdown-item"> {option} </div>

//                             ))} 
//                     </div>
//                 )}                
//         </div>
//     )
// }

// export default Dropdown;
