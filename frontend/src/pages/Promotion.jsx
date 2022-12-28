import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function Promotion() {
    const [courses, setCourses] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:5000/api/courses`)

                .then((res) => {
                    console.log(res.data);
                    setCourses(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);

    return (
        <div>
            {courses && (
                <div className="Promotion">
                    {courses.map((course) => {
                        return (
                            <div>
                                {/* <input type="checkbox" id={course._id}> */}
                                {course.title}
                                {/* </input> */}
                                <input type="checkbox" id={course._id}name={course.title}
                                    value={course.title}
                                />

                            </div>

                        )
                    })}
                </div>
            )}
        </div>
    )
}
