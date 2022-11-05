import { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import CourseDetails from '../components/CourseDetails';
// const axios = require('axios')
import axios, * as others from 'axios';


function Course() {
    let params = Object.values(useParams())
    let id = params[0]
    //const id = useParams()
    console.log(id)
   // let id = params.id
   const [courses, setCourses] = useState(null);
   const getResponse = async () => {
    try {
         const response = await axios.get(`/api/courses/${id}`)
         const json = await response.json();
         setCourses(json)
    } catch(err) {
         console.log('err')

    }
    }
    useEffect(() => {
        // axios.get(`/api/courses/${id}`)
        // .then( res =>setCourses(res.data)) 
        getResponse()
        // const fetchCourse = async () => {
        //     const response = await fetch('/api/courses/' +params[0]);
        //     const json = await response.json();
        //     console.log(json);
        //     if (response.ok) {
        //         setCourses(json);
        //     }
        // }
        // fetchCourse();
    }, []);
    console.log(courses)
    return (
        <div>
            <div>
                {courses && courses.map((course) => (
                    // <h1 key={course.id}>{course.title}</h1>
                    <CourseDetails key={course._id} course={course} />
                    
                ))}
            </div>
        </div>
    )
}

export default Course