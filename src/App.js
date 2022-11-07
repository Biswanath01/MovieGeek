import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import MovieDetail from './Components/MovieDetail';

export default function App() {
  return (
    <div className="App" style={{background: "#001e3c"}}>
      <Router>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie-detail/:movieId" element={<MovieDetail/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </div>
  );
};