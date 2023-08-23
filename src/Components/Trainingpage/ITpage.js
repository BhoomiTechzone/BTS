import React from 'react'
import Navbar from '../Navbar';
import { Link, NavLink, Outlet } from 'react-router-dom';

const ITpage = () => {

  const traningData = [
    {
      title: "Frontend Developer",
      description:
        "A Frontend Developer is responsible for implementing the visual and interactive elements of a website or web application. They work with HTML, CSS, and JavaScript to create user interfaces and ensure a smooth user experience. Frontend Developers collaborate with designers and backend developers to bring designs to life and create functional web applications.",
      icon: "fas fa-code", // Replace this with the actual Font Awesome icon CSS class for Frontend Developer
    },
    {
      title: "Backend Developer",
      description:
        "A Backend Developer is responsible for building and maintaining the server-side of web applications. They work with databases, server logic, and APIs to ensure the smooth functioning of web applications. Backend Developers handle data storage, security, and performance, allowing frontend developers to focus on user interfaces and experiences.",
      icon: "fas fa-database", // Replace this with the actual Font Awesome icon CSS class for Backend Developer
    },
    {
      title: "Full Stack Developer",
      description:
        "A Full Stack Developer is proficient in both frontend and backend development. They have the skills to work on the entire web application stack, from the user interface to the server-side logic and database management. Full Stack Developers are versatile and can handle different aspects of web development, making them valuable assets in building complete and robust web applications.",
      icon: "fas fa-laptop", // Replace this with the actual Font Awesome icon CSS class for Full Stack Developer
    },
  ];


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
                  <Link to='react'>
                    <button>React</button>
                  </Link>
                </div>
                <div className='IT-box-right-container'>
                  <Outlet />
                </div>
              </div>         
          </div>

          <div className='IT-boxes'>
              <div className='IT-box-left'>
                <i class="fas fa-database"></i>
                <h3>Backend Developer</h3>
                <p>A Backend Developer is responsible for building and maintaining the server-side of web applications. They work with databases, server logic, and APIs to ensure the smooth functioning of web applications. Backend Developers handle data storage, security, and performance, allowing frontend developers to focus on user interfaces and experiences.</p>
              </div>
              <div className='IT-box-right'>
                <div className='IT-box-right-btn'>
                  <Link to=''>
                    <button>Node</button>
                  </Link>
                  <Link to=''>
                    <button>Express</button>
                  </Link>
                  <Link to=''>
                    <button>Mongodb</button>
                  </Link>
                  <Link to=''>
                    <button>MySql</button>
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

export default ITpage;