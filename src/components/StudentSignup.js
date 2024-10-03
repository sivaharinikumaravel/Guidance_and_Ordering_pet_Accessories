import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api'; // Assume you have an API function to register the user
import '../components/StudentSignup.css';

const StudentSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // To redirect after successful signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    try {
      const response = await registerUser({ email, password }); // Send data to backend
      console.log('User registered:', response.data);
      navigate('/home'); // Redirect to Home page on success
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed! Please try again.');
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
    </div>
  );
};

export default StudentSignup;
