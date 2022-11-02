import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CourseDetails from '../components/CourseDetails';
function Course() {
    let params = useParams()
    let id = params.id
    const [courses, setCourses] = useState(null);
    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch(`/api/courses/${id}`);
            const json = await response.json();
            console.log(json);
            if (response.ok) {
                setCourses(json);
            }
        }
        fetchCourse();
    }, []);

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