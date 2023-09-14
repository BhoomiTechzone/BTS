import React from 'react'
import Navbar from '../Navbar';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../Footer'
const ITpage = () => {

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
          <h1>Our-Traning</h1>
        </div>
          <div className='IT-boxes'>
              <div className='IT-box-left'>
                <i class="fas fa-code"></i>
                <h3>Frontend Developer</h3>
                <p>A Frontend Developer is responsible for implementing the visual and interactive elements of a website or web application. They work with HTML, CSS, and JavaScript to create user interfaces and ensure a smooth user experience. Frontend Developers collaborate with designers and backend developers to bring designs to life and create functional web applications.</p>
              </div>
              <div className='IT-box-right'>
                <div className='IT-box-right-btn'>
                  <Link to='html'>
                    <button>HTML</button>
                  </Link>
                  <Link to='css'>
                    <button>CSS</button>
                  </Link>
                  <Link to='javascript'>
                    <button>JavaScript</button>
                  </Link>
                  <Link to='reactjs'>
                    <button>React</button>
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

export default ITpage;