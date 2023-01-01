import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Course from './pages/Course'
import Quiz from './components/Quiz'
// import "./App.css"
import Searchbar from "./components/SearchBar";
import CourseForm from './components/CourseForm';
import InstructorForm from './components/InstructorForm'
import Navbar2 from './components/Navbar2';
import GuestHome from './pages/GuestHome';
//import AdminHomePage from './components/AdminHomePage';
import AHome from './pages/AdminHome';
import About from './pages/About';
import Video from "./pages/Video";
import Login from "./pages/Login";
import SideBar from './components/SideBar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import CorporateTraineeForm from './components/corporateTraineeForm';
import AdminForm from './components/AdminForm'
import InstructorProfile from './pages/InstructorProfile';
import EditInstructorProfile from './components/EditInstructorProfile';
import CorporateTraineeProfile from './components/CorporateTraineeProfile';
import IndividualTraineeProfile from './components/IndividualTraineeProfile';
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
import AdminViewReports from './pages/AdminViewReports';
import UsersViewReports from './pages/UsersViewReports';
import ReportDetailsAdmin from './pages/ReportDetailsAdmin';
import ReportDetails from './pages/ReportDetails';
import InstructorSearch from './components/InstructorSearch';
import Contract from './pages/Contract'
import Reviews from './components/Reviews';
import Policy from './pages//PaymentPolicy'
import PolicyInstructor from './pages/PaymentPolicyInstructor'
import Signup from './pages/Signup';
import PaymentForm from './components/PaymentForm';
import StripeContainer from './components/StripeContainer';

// import '../src/components/PaymentForm.css'
// import '../src/pages/Signup.css'

import AddPromotionCourse from './pages/AddPromotionCourse';
import CourseViewGuest from './pages/CourseViewGuest';

//test
import TestCard from './pages/TestCard';
import CourseViewCTR from './pages/CourseViewCTR';
import CourseViewITE from './pages/CourseViewITE';
import CourseViewInstructor from './pages/CourseViewInstructor';
import SubtitleViewCT from './pages/SubtitleViewCT';
import SubtitlePageInstructorNew from './pages/SubtitlePageInstructorNew';
import CourseViewInstructor2 from './pages/CourseViewInstructor2';
import  CourseViewCTN from './pages/CourseViewCTN';
import CourseViewITN from './pages/CourseViewITN';
import SubtitleViewIT from './pages/SubtitleViewIT';

import ReportProblem from './components/ReportProblem';
import AdminHome from './pages/AdminHome'
import QuizAnswers from './components/QuizAnswers';
import Promotion from './pages/Promotion';

import MostPopular from './components/MostPopular';

import AccessRequests from './components/AccessRequests';
import ChangeIndividualTraineePassword from './components/ChangeIndividualTraineePassword';
import ChangeCorporateTraineePassword from './components/ChangeCorporateTraineePassword';
import ChangeAdminPassword from './components/ChangeAdminPassword';
import ChangeInstructorPassword from './components/ChangeInstructorPassword';
import RateCourse from './components/RateCourse';
import WriteNotes from './components/writeNotes';

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
            exact path ="/api/courses/addPromotion/:courseid"
            element ={<AddPromotionCourse/>} />

            <Route 
            exact path="/api/courses/getCourse/:courseid/guest"
            element={<CourseViewGuest/>} />
            {/* test Route */}
            {/* <Route 
            exact path="/api/teesst"
            element={<TestCard/>}/> */}
            <Route 
            exact path="/api/courses/getCourse/:courseid/CTR/:traineeid"
            element={<CourseViewCTR/>}/>
            <Route 
            exact path="/api/courses/getCourse/:courseid/ITE"
            element={<CourseViewITE/>}/>

             {/* Instructor Viweing His own Course */}
            <Route 
            exact path="/api/courses/getCourse/:courseid/InstructorCourse"
            element={<CourseViewInstructor/>}/>


          {/* Instructor viewing not his own course */}
            <Route 
            exact path="/api/courses/getCourse/:courseid/Instructor"
            element={<CourseViewInstructor2/>}/>

            {/* Corporate Trainee view course page after enrolling  */}
           <Route 
            exact path="/api/courses/getCourse/:courseid/CTN/:traineeid"
            element={<CourseViewCTN/>}/>

            {/* //IndividualTrainee view Course Page after enrolling  "same Page as Corporate Trainee*/}

            <Route 
            exact path="/api/courses/getCourse/:courseid/ITN/:traineeid"
            element={<CourseViewITN/>}/>

            <Route
              exact path="/api/subtitles/:subtitleid/Instructor"
              element={<SubtitlePageInst />}
            />
            <Route
              exact path="/api/courses/addPromotion/:courseid"
              element={<AddPromotionCourse />} />

            {/* <Route
              exact path="api/courses/getCourse/:courseid"
              element={<CourseView />} /> */}

            {/* subtitleViews */} 
            <Route 
            exact path="/api/subtitles/getSubtitle/:subtitleid/CTE/:traineeid/:courseid"
            element={<SubtitleViewCT/>}/>

           <Route 
            exact path="/api/subtitles/getSubtitle/:subtitleid/ITE/:traineeid/:courseid"
            element={<SubtitleViewIT/>}/>

             <Route
              exact path="/api/subtitles/getSubtitle/:subtitleid/Instructor"
              element={<SubtitlePageInstructorNew />}
            />
            
            {/* Nada */}
            <Route
              exact path="/api/instructor/rate"
              element={<RateInstructor />}
            />
            <Route
              exact path="/api/courses/rate"
              element={<RateCourse />}
            />
            <Route
              exact path="/api/admin/createAdmin"
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
              exact path="/api/individualTrainee/changePassword"
              element={<ChangeIndividualTraineePassword />}
            />
            <Route
              exact path="/api/corporateTrainee/changePassword"
              element={<ChangeCorporateTraineePassword />}
            />
            <Route
              exact path="/api/instructor/editProfile"
              element={<EditInstructorProfile />}
            />
            <Route
              exact path="/api/instructor/changePassword"
              element={<ChangeInstructorPassword />}
            />
            <Route
              exact path="/api/corporateTrainee/getProfile"
              element={<CorporateTraineeProfile />}
            />
            <Route
              exact path="/api/individualTrainee/getProfile"
              element={<IndividualTraineeProfile />}
            />

            <Route
              exact path="reviews"
              element={<Reviews />}
            />
            <Route
              exact path="/api/reportProblem"
              element={<ReportProblem />}
            />
            <Route
              exact path="/api/admin/accessRequests"
              element={<AccessRequests />}
            />
             <Route
              exact path="/api/admin/changePassword"
              element={<ChangeAdminPassword />}
            />
            <Route
              exact path="/writeNotes"
              element={<WriteNotes/>}
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
            <Route
              path="/quizanswers"
              element={<QuizAnswers />}
            />
            <Route
              path="/promotion"
              element={<Promotion />}
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

            {/* css bydrab law 3amaltaha /api/admin/ViewReports */}
            <Route
              path="/adminViewReports"
              element={[<AdminViewReports />]}
            />
            <Route
              exact path="/ViewReports"
              element={[<UsersViewReports />]}
            />
            <Route
              exact path="/ReportDetailsAdmin"
              element={[<ReportDetailsAdmin />]}
            />
            <Route
              exact path="/ReportDetails"
              element={[<ReportDetails />]}
            />

            <Route
              exact path="/mostPopular"
              element={[<MostPopular/> ]}
            />


            {/* Hoda */}
            <Route
              exact path="/api/:courseId/payment"
              element={<StripeContainer/>}
            />
            <Route
              exact path="/contract"
              element={<Contract />}
            />
            <Route
              exact path="/policy"
              element={<Policy />}
            />
             <Route
              exact path="/PaymentPolicyInstructor"
              element={<PolicyInstructor/>}
            />
             <Route
              exact path="/Signup"
              element={<Signup />}
            />
            <Route
              exact path="/api/courses/search"
              element={<Searchbar placeholder="Enter a course title or subject or instructor ..." />}
            />
            <Route
              exact path="/"
              element={[<GuestHome />]}
            />
            <Route
              exact path="/MyCourses"
              element={[<CorporateTraineeMyCourses />]}
            />
            <Route
              exact path="/MyEnrolledCourses"
              element={[<IndividualTraineeMyCourses />]}
            />
            <Route
              exact path="/MyTaughtCourses"
              element={[<InstructorMyCourses />]}
            />
            <Route
              exact path="/corporate"
              element={[<CorporateTraineeHome />]}
            />
            <Route
              exact path="/individual"
              element={[<IndividualTraineeHome />]}
            />
            <Route
              exact path="/instructor"
              element={[<InstructorHome />]}
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
            <Route
              path="/admin/"
              element={<AdminHome />}
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