import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const getActiveClass = ({ isActive }) =>
    isActive ? "active nav-link" : "nav-link";

  return (
    <nav className="navbar">
      <div className="logo">Grand Hotel</div>

      <ul className="nav-links">
        <li><NavLink to="/" className={getActiveClass}>Home</NavLink></li>
        <li><NavLink to="/rooms" className={getActiveClass}>Rooms</NavLink></li>
        <li><NavLink to="/about" className={getActiveClass}>About</NavLink></li>
        <li><NavLink to="/services" className={getActiveClass}>Services</NavLink></li>
        <li><NavLink to="/gallery" className={getActiveClass}>Gallery</NavLink></li>
        <li><NavLink to="/testimonials" className={getActiveClass}>Testimonials</NavLink></li>
        <li><NavLink to="/blog" className={getActiveClass}>Blog</NavLink></li>
        <li><NavLink to="/contact" className={getActiveClass}>Contact</NavLink></li>
      </ul>

      <NavLink className="book-btn" to="/booking" >
        Book Now
      </NavLink>
    </nav>
  );
}

export default Navbar;
