import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Team from './Team';
import Player from './Player';
import Compare from './Compare';
import './App.css';  
import starsLogo from './assets/dallas_stars_logo.png';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Team</Link>
            </li>
            <li>
              <Link to="/player">Player</Link>
            </li>
            <li>
              <Link to="/compare">Compare</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/player" element={<Player />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;