import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Course from './pages/Course'
import Quiz from './pages/Quiz'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/courses/" element={<Course />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
