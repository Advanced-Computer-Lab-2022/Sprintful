import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Course from './pages/Course'

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/api/courses/" element={<Course />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
