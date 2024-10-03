// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './LandingPage.css'; // Import the CSS for the landing page

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="image-section">
        {/* You can add any content or leave it as is */}
      </div>
      <div className="options-section">
        <h1>Welcome to the Alumni Portal</h1>
        <div className="button-container">
          <Link to="/student-login" className="login-button">Student Login</Link>
          <Link to="/alumni-login" className="login-button">Alumni Login</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

