import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Course from './pages/Course'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Course />
        </div>
      </Router>
    </>

  );
}

export default App;
