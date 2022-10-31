import {BrowserRouter ,Routes,Route} from 'react-router-dom'


//pages and Components
//import Home from './pages/Home'
import CourseForm from './components/CourseForm';



function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
      <div className='pages'>
        <Routes>
          <Route exact path="/api/courses/"  element={ <CourseForm />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
