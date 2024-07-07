// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-row">
        <div className='media-links'>
       <p>TrendSpark Apparel – Ignite Your Style!</p>
       <span className='medias'>
        <li><a href=""></a>dn</li> |
        <li><a href=""></a>dn</li>|
        <li><a href=""></a>dn</li> |
        <li><a href=""></a>dn</li>
       </span>
        </div>
        <div className="navbar-brand">
          <img src={logo} 
          alt="Timbu Apparel Logo" 
          className="navbar-logo" 
          />
         
          <span className="navbar-title">Timbu Apparel</span>
          <div className="navbar-row navbar-contact">
        <span>+234 809 436 8834</span>
        <span>chimaekwuj@ujgmail.com</span>
      </div>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <div className={`navbar-row navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/categories" onClick={() => setIsOpen(false)}>Categories</Link>
        <Link to="/trending" onClick={() => setIsOpen(false)}>Trending</Link>
        <Link to="/wishlist" onClick={() => setIsOpen(false)}>Wishlist</Link>
        <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
