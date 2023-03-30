import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<h1>test</h1>} />
      </Routes>
    </Router>


  );
}

export default App;
