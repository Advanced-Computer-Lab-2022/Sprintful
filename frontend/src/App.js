import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Course from './pages/Course'
import Quiz from './components/Quiz'
// import "./App.css"
import Searchbar from "./components/SearchBar";
import CourseForm from './components/CourseForm';
import InstructorForm from './components/InstructorForm'
import Navbar2 from './components/Navbar2';
import GuestHome from './pages/GuestHome';
import About from './pages/About';
import Video from "./pages/Video";
import Login from "./pages/Login";
import SideBar from './components/SideBar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import CorporateTraineeForm from './components/CorporateTraineeForm';
import AdminForm from './components/AdminForm'
import InstructorProfile from './pages/InstructorProfile';
import EditInstructorProfile from './components/EditInstructorProfile';
import RateInstructor from './components/RateInstructor';
import SubtitleForm from './components/SubtitleForm';
import AddVideoLinkSubtitle from './pages/AddVideoLinkSubtitle';
import SubtitlePageInst from './pages/SubtitlePageInst';
import React from "react";
import FilterPrice from './components/Filter.js';
import AddTaskMain from './pages/AddTask';
import AddQuestion from './pages/AddQuestion';
import CorporateTraineeHome from './pages/CorporateTraineeHome';
import IndividualTraineeHome from './pages/IndividualTraineeHome';
import InstructorHome from './pages/InstructorHome';
import CorporateTraineeMyCourses from './pages/CorporateMyCourses';
import IndividualTraineeMyCourses from './pages/IndividualMyCourses'
import InstructorMyCourses from './pages/InstructorMyCourses';
import InstructorSearch from './components/InstructorSearch';
import Contract from './pages/Contract'
import Reviews from './components/Reviews';
import Policy from './pages//PaymentPolicy'

import Signup from './pages/Signup';
import PaymentForm from './components/PaymentForm';
import StripeContainer from './components/StripeContainer';
// import '../src/components/PaymentForm.css'
// import '../src/pages/Signup.css'

import AddPromotionCourse from './pages/AddPromotionCourse';
import CourseView from './pages/CourseView';
import CourseViewPage from './pages/CourseViewPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>

            {/* Reem */}
            <Route
              exact path="/addCourse"
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
            <Route 
            exact path ="/api/courses/addPromotion/:courseid"
            element ={<AddPromotionCourse/>} />

            <Route 
            exact path="api/courses/getCourse/:courseid"
            element={<CourseView/>} />

            {/* Nada */}

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
              exact path="/api/instructor/editProfile"
              element={<EditInstructorProfile />}
            />
            <Route
              exact path="/api/instructor/rate"
              element={<RateInstructor />}
            />
            <Route
              exact path="reviews"
              element={<Reviews />}
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
            {/* <Route
              path="/CorporateTrainee"
              element={<CorporateTraineeHome />}
            /> */}

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
              path="/addQuestion"
              element={<AddQuestion />}
            />

            {/* Hoda */}
            <Route
              exact path="/payment"
              element={<StripeContainer/>}
            />
            <Route
              exact path="/contract"
              element={<Contract/>}
            />
            <Route
              exact path="/policy"
              element={<Policy/>}
            />
             <Route
              exact path="/Signup"
              element={<Signup/>}
            />
            <Route
              exact path="/api/courses/search"
              element={<Searchbar placeholder="Enter a course title or subject or instructor ..." />}
            />
            <Route
              exact path="/"
              element={[ <GuestHome />]}
            />
            <Route
              exact path="/MyCourses"
              element={[ <CorporateTraineeMyCourses/>]}
            />
            <Route
              exact path="/MyEnrolledCourses"
              element={[ <IndividualTraineeMyCourses/>]}
            />
            <Route
              exact path="/MyTaughtCourses"
              element={[<InstructorMyCourses/> ]} 
            />
            <Route
              exact path="/corporate"
              element={[ <CorporateTraineeHome />]}
            />
             <Route
              exact path="/individual"
              element={[ <IndividualTraineeHome />]}
            />
             <Route
              exact path="/instructor"
              element={[ <InstructorHome />]}
            />
            <Route
              exact path="/admin"
              // element={[ <AdminHome />]}
            />
            <Route
              exact path="/about"
              element={[<Navbar2 />, <About />]}
            />
            {/* <Route
              exact path="/myCourses"
              element={[<Navbar2 />, <MyCourses />]}
            /> */}
            <Route
              path="/Video/"
              element={<Video />}
            />
            <Route
              path="/Login"
              element={<Login />}
            />
          </Routes>
          {/* <Routes>
            <Route
                path="/individual/MyCourses"
                element={[ <IndividualTraineeMyCourses />]}
            />
          </Routes> */}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;