import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Team from './Team';
import Player from './Player';
import Compare from './Compare';
import './App.css';  // Import the CSS file for styling

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

        <header className="App-header">
          <h1>React and Python Web App</h1>
          {data ? <p>{data.message}</p> : <p>Loading...</p>}
        </header>
      </div>
    </Router>
  );
}

export default App;