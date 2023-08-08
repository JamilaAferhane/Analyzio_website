import React from 'react';
import Home from './pages/Home';
import SemanticAnalysis from './pages/SemanticAnalysis';
import PartialAnalysis from './pages/PartialAnalysis';
import AboutUs from './pages/AboutUs';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/SemanticAnalysis'  element={<SemanticAnalysis/>} />
          <Route path='/PartialAnalysis' element={<PartialAnalysis/>} />
          <Route path='/AboutUs' element={<AboutUs/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;