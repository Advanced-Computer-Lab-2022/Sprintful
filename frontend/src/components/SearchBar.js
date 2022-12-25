// import "./SearchBar.css"
import {useState,useEffect} from 'react'
import axios from 'axios';

function Searchbar({placeholder}){
    const [courses,setCourses] = useState([])
    const [searchTerm,setSearchTerm] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/search?searchTerm=${searchTerm}`)
        .then((res) => {
            console.log(res.data)
            setCourses(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [searchTerm]);

    const handleOnChange = async(e) =>{
        e.preventDefault()
        var a = document.getElementById('input').value  ;
        setSearchTerm(a)
        console.log(searchTerm)
    }
    return(
        <div className="search">
            <div className="searchInputs">
                <input id={'input'} value={searchTerm} type="text" placeholder={placeholder}  />
                <div className="searchIcon">
                    <button onClick={handleOnChange} > Search </button>
                </div>
            </div>
            <div className='courses'>
            {courses  && courses.map((course) => (
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