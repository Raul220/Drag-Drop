import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import Home from './Pages/Home';
import Exercise from './Pages/Exercise';
import { useExerciseContext } from './context/ExerciseState';
import './App.css';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
    </Router>
  );
}

export default App;
