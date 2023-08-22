import React from 'react';
import Navbar from '../Navbar';
import { NavLink } from 'react-router-dom';

const SoftwareSales = () => {
  return (
    <div>
    <Navbar />
    <div className="sub-navbar">
      <h3>Services</h3>
        <h3>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <span> / </span>
          <NavLink to="/IT-Department" className="navlink">
            IT Department
          </NavLink>
        </h3>
    </div>
    </div>
  )
}

export default SoftwareSales;