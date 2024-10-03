// src/components/Register.js (or your registration component)
import React, { useState } from 'react';
import { registerUser } from '../api'; // Adjust the path as needed

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Example regex for student email validation (e.g., username@school.edu)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@school\.edu$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!emailRegex.test(email)) {
      setError('Please enter a valid student email (e.g., username@school.edu)');
      return;
    }

    setError('');

    try {
      const response = await registerUser({ name, email, password });
      console.log('User registered:', response.data);
      // Handle successful registration (e.g., redirect or show a success message)
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration error (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
