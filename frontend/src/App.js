// import JSONDATA from "./MOCK_DATA.json"
//pages and Components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Searchbar from "./components/SearchBar";
import CourseForm from './components/CourseForm';



function App() {
  return (
    <div classname="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
          <Route exact path="/api/courses/" element={<CourseForm />} />
            <Route exact path="/api/courses/search" element={
              <Searchbar placeholder="Enter a course title or subject or instructor ..." />
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  )
}

export default App;
