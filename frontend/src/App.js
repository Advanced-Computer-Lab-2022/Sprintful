import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Course from './pages/Course'

function App() {
  return (
    <div className='App'>
     <BrowserRouter>
        <div className='container'>
        <Routes>
        <Route  path='/courses/:id' element={<Course/>}/>    
      </Routes>
      </div>
      </BrowserRouter>


    </div>

  );
}

export default App;
