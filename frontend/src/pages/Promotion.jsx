import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function Promotion() {
    const [courses, setCourses] = useState(null);
    // const [courseschecked, setCoursesChecked] = useState(null);
    let courseschecked = [];
    const [checked, setChecked] = useState(false);
    const optionClicked = (courseid) => {
        
        console.log(checked)
        console.log("hello")
        console.log(courseid);
        courseschecked = courseschecked.concat(courseid);
        console.log(courseschecked);

      };

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

    const addPromotion = () => {

    };

    return (
        <div>
            {courses && (
                <div className="Promotion">
                    {courses.map((course) => {
                        return (
                            <div>
                                {/* <input type="checkbox" id={course._id}> */}
                                <input type="checkbox"
                                    id={course._id} value={course.title}
                                    // checked={courseschecked}
                                    // onChange={(e) => setCoursesChecked(e.target.id)}
                                    // onChange={(e) => courseschecked.push(e.target.id)}
                                    // onChange={(e) => optionClicked(e.target.id)}
                                    onClick={() => setChecked(current => !current)}
                                    onChange={(e) => optionClicked(e.target.id)}

                                />
                                {course.title}
                                {/* </input> */}


                            </div>

                        )
                    })}
                    <form>
                        <label>
                            Promotion:
                            <input type="number" name="promotion"
                            />
                        </label>
                        <button onClick={() => addPromotion()}> Add promotion </button>
                    </form>
                </div>
            )}
        </div>
    )
}
