import axios from 'axios'
// import "./FilterDropDown.css"
import {useState, useEffect} from 'react'

const FilterPrice = () => {
  const [courses,setCourses] = useState([])
  const[price,setPrice] = useState(null)
  const [subject, setSubject] = useState(null)
  const [rating, setRating] = useState(null)
  //const[filteredPriceCourses,setFilteredPriceCourses] = useState([])
  //const[filteredSubCourses,setFilteredSubCourses] = useState([])
  //const[filteredRatingCourses,setFilteredRatingCourses] = useState([])
  const [filterData,setFilterData]=useState([]);
  // const params = new URLSearchParams(window.location.search);
  // console.log(params.get('price'))

  const handleFilter =  async(e) =>{
    //const priceSelected = event.target.value
    //setSubject
    e.preventDefault()
    var a = document.getElementById('rating').value  ;
    setRating(a)
    var b = document.getElementById('subject').value  ;
    setSubject(b)
    var c = document.getElementById('price').value  ; //-->value=price
    setPrice(c)
  
    //console.log("New Rating:" +rating)
  
    //console.log(price +" " + subject + " " + rating)
  }

  useEffect( ()=>{
    const fecthCourses =async () =>{
        await axios.get('http://localhost:5000/api/courses/').then(
       (res) => { 
           const courses = res.data
           //console.log(courses)
           setCourses(courses)
       }
        );
    }
    const response = async() =>{
      console.log("hello")
      console.log(price +" " + subject + " " + rating)
    await axios.post(`http://localhost:5000/api/courses/filter?subject=${subject}&rating=${rating}&price=${price}`)
    .then((res) => { 
          //console.log(price)
          const course = res.data
          //console.log("price")
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
    //   .catch((err) => {
    //     console.log(err);
    // }
  
 //      );
    }
    fecthCourses()
    response()
    setPrice(null)
    setSubject(null)
    setRating(null)
    //setFilterData([])
}, [price,subject,rating,filterData])






const viewCourse = async(event) =>{
  //navigates to course details
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
  <div className="filter">
      <div className="priceList">

        <select className="list"
          //onChange={(e) => setPrice(e.target.value)}
          id={'price'}
          value={price}
        >
          {/* assuming price range is 0-5000 */}
          <option selected disabled key="0" value="null"> Select a price</option> 
          <option key="1" value="0" >FREE </option>
          <option key="2" value="1000" >less than 1000</option>
          <option key="3" value="3000" >less than 3000</option>
          <option key="4" value="5000">less than 5000</option>
          <option key="5" value="99999999">more than 5000</option>
        </select>

      </div>

      {/* <div className="subjectList">
        <select className="list"
          //onChange={(e) => setSubject(e.target.value)}
          id={'subject'}
          value={subject}
        >
          <option key="0" value="null" selected disabled> Choose a course' subject</option>
          {courses.map((op) => (
            <option key={op.id} value={op.subject}> {op.subject} </option>
          ))}  
        </select>
      </div> */}
      <div className="subjectList">
        <select className="list"
        id={'subject'}
        value={subject}
        >
          <option key="0" value="null" selected disabled> Choose a course' subject</option>
          <option key="1" value="Computer Science">Computer Science</option>
          <option key="2" value="Languages">Languages</option>
          <option key="3" value="Physics">Physics</option>
          <option key="4" value="Business Administration">Business Administration</option>
          <option key="5" value="Mathematics">Mathematics</option>
          </select>
          </div>

      <div className="ratingList">
        <select className="list"
        //onChange={(e) => setRating(e.target.value)}
        id={'rating'}
        value={rating}
        >
          <option key="-1" value="null" selected disabled> Choose a course' rating</option>
          {/* <option key="0" value="0"> 0 Stars</option> */}
          <option key="1" value="1">1 Star </option>
          <option key="2" value="2">2 Stars</option>
          <option key="3" value="3">3 Stars</option>
          <option key="4" value="4">4 Stars</option>
          <option key="5" value="5">5 Stars</option>
        </select> 
      </div>

      <div className="result">
        <ul>
        {filterData.map((course) => (
          <li key={course._id} onClick={viewCourse}>{course.title}</li>
        ))}
        </ul>
        {/*setFilteredCourses([])*/}
      </div>
      <button onClick={handleFilter}> Apply</button>
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
