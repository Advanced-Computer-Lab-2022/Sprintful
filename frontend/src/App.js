import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Searchbar from "./components/SearchBar";
import CourseForm from './components/CourseForm';
import InstructorForm from './components/InstructorForm'
import CorporateTraineeForm from './components/corporateTraineeForm';
import AdminForm from './components/AdminForm'
import SubtitleForm from './components/SubtitleForm';

function App() {
  return (
    <div className="App">
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
                exact path ="/addSubtitle/:courseid"
                element={<SubtitleForm/>}
                />
                
              </Routes>
            </div>
          </BrowserRouter>
        </div>
)}

export default App;