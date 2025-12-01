import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  
  return (
    <nav className="navbar">
      <div className="logo">Grand Hotel</div>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/rooms">Rooms</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <NavLink to="/booking" className="book-btn">Book Now</NavLink>
    </nav>
  );
}

export default Navbar;
