import React from 'react';
import starsLogo from './assets/dallas_stars_logo.png';
import './Player.css';
import CollapsibleTable from './Player_Table'; // Adjust the path as necessary

function Player() {
  return (
    <div className="team-container">
      <div className="header">
        <img src={starsLogo} className="team-logo" alt="Dallas Stars Logo" />
        <h2>DALLAS STARS HOCKEY</h2>
      </div>
      <p>Player Page</p>
      <div className="record">
        <h3>Select a player's name to view more information about the player</h3>
      </div>
      <CollapsibleTable />  {/* Add the table component here */}
    </div>
  );
}

export default Player;