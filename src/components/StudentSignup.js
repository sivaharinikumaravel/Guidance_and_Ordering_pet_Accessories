import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../components/StudentSignup.css';

const StudentSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // To redirect after successful signup

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match before submitting
    if (password !== confirmPassword) {
      alert("Passwords do not match!"); // Alert if passwords don't match
      return;
    }

    try {
      // API call for signup
      const response = await axios.post("http://localhost:5000/api/users/register", {
        email,
        password,
      });

      // If signup is successful, redirect to the login page
      if (response.status === 200) {
        alert("Signup successful! Please login."); // Display success message
        navigate('/student-login'); // Redirect to login page
      }

    } catch (err) {
      console.error("Signup error: ", err);
      alert("Signup failed. Please try again."); // Display error message
    }
  };

  return (
    <div className="signup-container">
      <h2>Student Signup</h2>
      <form onSubmit={handleSubmit}>
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
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      
      <p className="login-link">
        Already have an account? <Link to="/student-login">Login here</Link>
      </p>
    </div>
  );
};

export default StudentSignup;