import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Course from './pages/Course'
import Quiz from './pages/Quiz'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import Searchbar from "./components/SearchBar";
import CourseForm from './components/CourseForm';
import InstructorForm from './components/InstructorForm'
import Navbar2 from './components/Navbar2';
import MyCourses from './pages/MyCourses';
import Home2 from './pages/Home2';
import About from './pages/About';
import Video from "./pages/Video";
import SideBar from './components/SideBar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import InstructorForm from './components/InstructorForm';
import CorporateTraineeForm from './components/CorporateTraineeForm';
import AdminForm from './components/AdminForm'
import InstructorProfile from './components/InstructorProfile';
import RateInstructor from './components/RateInstructor';
import SubtitleForm from './components/SubtitleForm';
import AddVideoLinkSubtitle from './pages/AddVideoLinkSubtitle';
import SubtitlePageInst from './pages/SubtitlePageInst';
import AdminForm from './components/AdminForm';
import React from "react";
import FilterPrice from './components/FilterPrice.js';
import AddTaskMain from './pages/AddTask';
import AddQuestion from './pages/AddQuestion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>

            {/* Reem */}
            <Route
              exact path="/api/courses/"
              element={<CourseForm />}
            />
            <Route
              exact path="/addSubtitle/:courseid"
              element={<SubtitleForm />}
            />
            <Route
              extact path="/api/subtitles/addVideoLink/:subtitleid"
              element={<AddVideoLinkSubtitle />}
            />
            <Route
              exact path="/api/subtitles/:subtitleid/Instructor"
              element={<SubtitlePageInst />}
            />

            {/* Nada */}

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
            <Route
              extact path="/api/instructor/getProfile"
              element={<InstructorProfile />}
            />
            <Route
              extact path="/api/instructor/rate"
              element={<RateInstructor />}
            />

            {/* Ragaa */}

            <Route
              path="/courses/"
              element={<Course />}
            />
            <Route
              path="/quiz"
              element={<Quiz />}
            />

            {/* Somaya */}

            <Route
              extact path="/api/courses/filterPrice"
              element={<FilterPrice />}
            />

            <Route
              path="/addTask"
              element={<AddTaskMain />}
            />

            <Route
              path="/addTask/questions"
              element={<AddQuestion />}
            />
            {/* Hoda */}
            <Route
              exact path="/api/courses/search"
              element={
                <Searchbar placeholder="Enter a course title or subject or instructor ..." />}
            />
            <Route
              extact path="/"
              element={[<Navbar2 />, <Home2 />]}
            />
            <Route
              extact path="/about"
              element={[<Navbar2 />, <About />]}
            />
            <Route
              extact path="/myCourses"
              element={[<Navbar2 />, <MyCourses />]}
            />
            <Route
              path="/Video/"
              element={<Video />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;