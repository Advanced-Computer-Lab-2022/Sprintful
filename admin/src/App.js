import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHome from './AdminHome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Route
    exact path="/admin"
    element={ <AdminHome />}
  />
  </BrowserRouter>
</div>
  );
}

export default App;
