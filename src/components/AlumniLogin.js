import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/AlumniLogin.css';

const AlumniLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Alumni Login', { email, password });
  };

  return (
    <div className="login-container">
      <h2>Alumni Login</h2>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/alumni-signup">Register Here</Link>
      </p>
    </div>
  );
};

export default AlumniLogin;
