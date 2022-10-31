import { useEffect, useState } from 'react';

import CourseDetails from '../components/CourseDetails';
function Course() {

    const [courses, setCourses] = useState(null);
    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch('/api/courses/');
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