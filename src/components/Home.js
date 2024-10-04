import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Pet Shop</h1>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <div className="hero-section">
        <h2>Welcome to the Pet Shop!</h2>
        <p>Your one-stop shop for all things pets!</p>
      </div>

      <div className="products-container">
        <h3>Available Pets</h3>
        <div className="product-list">
          <div className="product-card">
            <img src="path/to/your/pet-image1.jpg" alt="Pet 1" />
            <h4>Pet Name 1</h4>
            <p>Description of pet 1.</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="path/to/your/pet-image2.jpg" alt="Pet 2" />
            <h4>Pet Name 2</h4>
            <p>Description of pet 2.</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="path/to/your/pet-image3.jpg" alt="Pet 3" />
            <h4>Pet Name 3</h4>
            <p>Description of pet 3.</p>
            <button>Add to Cart</button>
          </div>
          {/* Add more pet cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
