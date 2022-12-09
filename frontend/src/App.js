import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Course from './pages/Course'
import Quiz from './pages/Quiz'
import "./App.css"
import Searchbar from "./components/SearchBar";
import CourseForm from './components/CourseForm';
import InstructorForm from './components/InstructorForm'
import CorporateTraineeForm from './components/corporateTraineeForm';
import AdminForm from './components/AdminForm';
import Navbar2 from './components/Navbar2';
import MyCourses from './pages/MyCourses';
import Home2 from './pages/Home2';
import About from './pages/About';
import Video from "./pages/Video";
import SideBar from './components/SideBar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

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
              element={<AdminForm />}
            />
            <Route
              extact path="/api/admin/createInstructor"
              element={<InstructorForm />}
            />
            <Route
              extact path="/api/admin/createCorporateTrainee"
              element={< CorporateTraineeForm />}
            />
            <Route extact path="/"
              element={[<Navbar2 />, <Home2 />]}
            />
            <Route extact path="/about"
              element={[<Navbar2 />, <About />]}
            />
            <Route extact path="/myCourses"
              element={[<Navbar2 />, <MyCourses />]}
            />
            <Route path="/Video/"
              element={<Video />}
            />
            <Route path="/courses/" element={<Course />}
            />
            <Route path="/quiz" element={<Quiz />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  )
}

export default App;