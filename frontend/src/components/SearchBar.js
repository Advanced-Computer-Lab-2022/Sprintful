import "./SearchBar.css"
import SearchIcon from '@material-ui/icons/Search';
import {useState,useEffect} from 'react'

function Searchbar({placeholder}){
    const [courses,setCourses] = useState(null)
    const [filterData,setFilterData]=useState([]);
    useEffect( ()=>{
        const fecthCourses =async () =>{
            const response =await fetch('/api/courses/')
            const json = await response.json()

            if(response.ok){
                setCourses(json)
            }
        }

        fecthCourses()
    }, [])
    const handleFilter = (event) =>{
        const searchWord =event.target.value
        const newFilter = courses.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase()) ||  value.subject.toLowerCase().includes(searchWord.toLowerCase()) 
            
        })
        setFilterData(newFilter)
    }
    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div className="searchIcon">
                     <SearchIcon/>
                </div>
            </div>
            <div className='courses'>
            {courses && filterData.map((course) => (
                <div className="box" key={course._id}>
                <p>{course.title}</p>
                <p>totalhours: {course.totalhours}</p>
                <p>rating: {course.rating}</p>
                <button >View Course Details</button>


              </div>
                // <p key= {course._id}>{course.title}</p>
            ))}
        </div>
        </div>
    )
}
export default Searchbar