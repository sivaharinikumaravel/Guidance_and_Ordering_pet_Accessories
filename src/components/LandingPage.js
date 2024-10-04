// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './LandingPage.css'; // Import the CSS for the landing page

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div>
        {/* You can add any content or leave it as is */}
      </div>
      <div className="options-section">
        <h1>Welcome to the Pet shop</h1>
        <div className="button-container">
          <Link to="/student-login" className="login-button">Student Login</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

