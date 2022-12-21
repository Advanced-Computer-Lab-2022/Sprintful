import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Course from './pages/Course'
import Quiz from './components/Quiz'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css"
import Searchbar from "./components/SearchBar";
import CourseForm from './components/CourseForm';
import InstructorForm from './components/InstructorForm'
import Navbar2 from './components/Navbar2';
import MyCourses from './pages/MyCourses';
import GuestHome from './pages/GuestHome';
//import AdminHomePage from './components/AdminHomePage';
import AHome from './pages/AdminHome';
import About from './pages/About';
import Video from "./pages/Video";
import SideBar from './components/SideBar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import CorporateTraineeForm from './components/CorporateTraineeForm';
import AdminForm from './components/AdminForm'
import InstructorProfile from './components/InstructorProfile';
import CorporateTraineeProfile from './components/CorporateTraineeProfile';
import IndividualTraineeProfile from './components/IndividualTraineeProfile';
import RateInstructor from './components/RateInstructor';
import SubtitleForm from './components/SubtitleForm';
import AddVideoLinkSubtitle from './pages/AddVideoLinkSubtitle';
import SubtitlePageInst from './pages/SubtitlePageInst';
import React from "react";
import FilterPrice from './components/FilterPrice.js';
import AddTaskMain from './pages/AddTask';
import AddQuestion from './pages/AddQuestion';
import AdminHome from './pages/AdminHome'

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
              exact path="/api/subtitles/addVideoLink/:subtitleid"
              element={<AddVideoLinkSubtitle />}
            />
            <Route
              exact path="/api/subtitles/:subtitleid/Instructor"
              element={<SubtitlePageInst />}
            />

            {/* Nada */}
            <Route
              exact path="/api/instructor/rate"
              element={<RateInstructor />}
            />
            <Route
              exact path="/api/admin/"
              element={<AdminForm />}
            />
            <Route
              exact path="/api/admin/createInstructor"
              element={<InstructorForm />}
            />
            <Route
              exact path="/api/admin/createCorporateTrainee"
              element={< CorporateTraineeForm />}
            />
            <Route
              exact path="/api/instructor/getProfile"
              element={<InstructorProfile />}
            />
            <Route
              exact path="/api/corporateTrainee/getProfile"
              element={<CorporateTraineeProfile />}
            />
            <Route
              exact path="/api/individualTrainee/getProfile"
              element={<IndividualTraineeProfile />}
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
              exact path="/api/courses/filterPrice"
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
              exact path="/"
              element={[ <GuestHome />]}
            />
            <Route
              exact path="/about"
              element={[<Navbar2 />, <About />]}
            />
            <Route
              exact path="/myCourses"
              element={[<Navbar2 />, <MyCourses />]}
            />
            <Route
              path="/Video/"
              element={<Video />}
            />
            <Route
              path="/admin/"
              element={<AdminHome />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;