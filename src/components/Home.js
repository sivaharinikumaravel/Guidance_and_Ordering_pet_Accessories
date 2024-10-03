// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Create this CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Alumni Portal</h1>
      <div className="navigation-links">
        <Link to="/student-profile" className="nav-link">Student Profile</Link>
        <Link to="/alumni-profile" className="nav-link">Alumni Profile</Link>
        <Link to="/events" className="nav-link">Events</Link>
        <Link to="/donations" className="nav-link">Donations</Link>
        <Link to="/networking" className="nav-link">Networking</Link>
        <Link to="/jobs" className="nav-link">Job Portal</Link>
      </div>
    </div>
  );
}

export default Home;
