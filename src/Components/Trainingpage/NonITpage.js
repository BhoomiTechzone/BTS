import React from 'react';
import Navbar from '../Navbar';
import { Outlet, Link, NavLink } from 'react-router-dom';

const NonITpage = () => {
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
    <div className="header-IT">
    <h1>Our-Placement</h1>
  </div>
    <div className='IT-boxes'>
        <div className='IT-box-left'>
          <i class="fa-solid fa-phone"></i>
          <h3>Telecaller</h3>
          <p>A Telecaller, also known as a Telemarketer or Customer Service Representative, is responsible for making outbound calls to potential customers or existing clients. They play a vital role in sales, market research, and customer support.</p>
        </div>
        <div className='IT-box-right'>
          <div className='IT-box-right-btn'>
            <Link to='BPO'>
              <button>BPO</button>
            </Link>
            <Link to='sales-executive'>
              <button>Sales</button>
            </Link>
            <Link to='councillor'>
              <button>Councillor</button>
            </Link>
            <Link to='backend'>
              <button>Backend</button>
            </Link>
          </div>
          <div className='IT-box-right-container'>
            <Outlet />
          </div>
        </div>         
    </div>
    </div>
  )
}

export default NonITpage;