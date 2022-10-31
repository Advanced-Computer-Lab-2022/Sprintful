import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from './pages/Home'
//import Navbar from './components/Navbar'
//import AdminForm from './components/AdminForm';
import InstructorForm from './components/InstructorForm'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              extact path ="/api/admin/createInstructor"
              element={<InstructorForm/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;





/*
<Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route pathexact ='/' element={<Dashboard />} />
            <Route pathexact='/createadmin' element={<CreateAdmin />} />
            <Route pathexact='/login' element={<Login />} />
            <Route pathexact='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>*/

