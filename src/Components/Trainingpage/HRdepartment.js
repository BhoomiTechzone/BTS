import React from 'react';
import Navbar from '../Navbar';
import { Outlet, Link, NavLink } from 'react-router-dom';
import Footer from '../Footer';

const HRdepartment = () => {
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
            HR Department
          </NavLink>
        </h3>
    </div>
    <div className="header-IT">
          <h1>Our-Hiring</h1>
        </div>
          <div className='IT-boxes'>
              <div className='IT-box-left'>
                <i class="fas fa-code"></i>
                <h3>Human Resource</h3>
                <p>Human Resources (HR) encompasses a wide range of functions and responsibilities within an organization related to managing its employees. If you have specific questions or topics related to HR that you'd like to know more about or need assistance with, please feel free to ask.</p>
              </div>
              <div className='IT-box-right'>
                <div className='IT-box-right-btn'>
                  <Link to='hr-Manager'>
                    <button>HR Manager</button>
                  </Link>
                  <Link to='hr-Exective'>
                    <button>HR Executive</button>
                  </Link>
                  <Link to='hr-Recruiter'>
                    <button>HR Recruiter</button>
                  </Link>
                  <Link to='hr-Analyst'>
                    <button>HR Analyst</button>
                  </Link>
                </div>
                <div className='IT-box-right-container'>
                  <Outlet />
                </div>
              </div>         
          </div>
          <Footer />
    </div>
  )
}

export default HRdepartment;