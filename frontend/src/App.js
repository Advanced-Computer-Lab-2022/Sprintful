import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Searchbar from "./components/SearchBar";
import CourseForm from './components/CourseForm';
import InstructorForm from './components/InstructorForm'
import CorporateTraineeForm from './components/CorporateTraineeForm';
import AdminForm from './components/AdminForm'
import InstructorProfile from './components/InstructorProfile';
import RateInstructor from './components/RateInstructor';

function App() {
  return (
    //<div className="App">
      <BrowserRouter>
        <div className='pages'>
              <Routes>
                <Route exact path="/api/courses/" element={<CourseForm />} />
                <Route exact path="/api/courses/search" element={
                  <Searchbar placeholder="Enter a course title or subject or instructor ..." />
                } />
                <Route
                  extact path="/api/admin/"
                  element={<AdminForm/>}
                />
                 <Route
                  extact path="/api/admin/createInstructor"
                  element={<InstructorForm/>}
                />
                 <Route
                  extact path="/api/admin/createCorporateTrainee"
                  element={< CorporateTraineeForm/>}
                />
                <Route
                  extact path="/api/instructor/getProfile"
                  element={<InstructorProfile/>}
                />
              <Route
                  extact path="/api/instructor/rate"
                  element={<RateInstructor/>}
                />
              </Routes>
            </div>
          </BrowserRouter>
        //</div>
)}

export default App;