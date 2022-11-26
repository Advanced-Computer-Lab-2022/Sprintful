import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Course from './pages/Course'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/api/courses/" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
