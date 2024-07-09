import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
    setIsOpen(false); 
  };

  const renderCategoryLinks = () => {
    return (
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        
        <div className="category-links">
          <div className="category-link" onClick={() => handleCategoryClick('categories')}>
            Categories
            {activeCategory === 'categories' && (
              <div className="category-dropdown">
                <Link to="/men" onClick={() => setIsOpen(false)}>Men fashion</Link>
                <Link to="/women" onClick={() => setIsOpen(false)}>Women fashion</Link>
                <Link to="/sunglasses" onClick={() => setIsOpen(false)}>Sunglasses</Link>
                <Link to="/snikers" onClick={() => setIsOpen(false)}>Shoes</Link>
                <Link to="/chic" onClick={() => setIsOpen(false)}>Chic</Link>
                
              </div>
            )}
          </div>
        </div>
        <Link to="/trending" onClick={() => setIsOpen(false)}>Trending</Link>
        <Link to="/wishlist" onClick={() => setIsOpen(false)}>Wishlist</Link>
        <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-row">
        <div className='media-links'>
          <p>TrendSpark Apparel – Ignite Your Style!</p>
          <span className='medias'>
            <li><a href="#">dn</a></li> |
            <li><a href="#">dn</a></li> |
            <li><a href="#">dn</a></li> |
            <li><a href="#">dn</a></li>
          </span>
        </div>
        <div className="navbar-brand">
          <img src={logo} alt="Timbu Apparel Logo" className="navbar-logo" />
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
      {renderCategoryLinks()}
    </nav>
  );
};

export default Navbar;
