import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import Searchbar from "./components/SearchBar";
import CourseForm from './components/CourseForm';
import InstructorForm from './components/InstructorForm';
import CorporateTraineeForm from './components/CorporateTraineeForm';
import AdminForm from './components/AdminForm';
import React from "react";
import FilterPrice from './components/FilterPrice.js';
import AddTaskMain from './pages/AddTask';
import AddQuestion from './pages/AddQuestion';

// const router = createBrowserRouter([
//   {
//     path: "/addTask",
//     element: <div>Hello</div>,
//   }
// ]);

function App() {
  //const {selected, setSelected} = useState("");
  return (
    <div classname="App">
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
                  extact path="/api/courses/filterPrice"
                  element={<FilterPrice/>}
                />
                
                <Route 
                path="/addTask"
                element={<AddTaskMain/>}
                />

                <Route
                path= "/addTask/questions"
                element={<AddQuestion/>}
                />

              </Routes>
            </div>
          </BrowserRouter>
         

    {/* <>
    <RouterProvider router={router}/>
    </> */}

    </div>

)};

export default App;