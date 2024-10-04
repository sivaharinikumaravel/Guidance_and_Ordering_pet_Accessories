// src/components/StudentLogin.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './StudentLogin.css'; // Assuming you have this file for styling

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Assume login is successful after API call
    try {
      // API call for login here
      navigate('/home'); // Redirect to Home on success
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  
  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/student-signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default StudentLogin;
