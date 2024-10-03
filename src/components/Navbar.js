import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Include styling for your Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/student-login">Student Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/alumni-login">Alumni Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
