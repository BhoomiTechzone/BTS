import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-upper-div">
        <div className="footer-company-details">
          <h2>BHOOMI TECHZONE SERVICES</h2>
          <p>A-43, Sector 63 Noida UP - 201301</p>
          <p>
            <b>Phone:</b>
            <span>+91 8130787194, +91 9650017061</span>
          </p>
          <p>
            <b>Email:</b>
            <span>bhoomitechzoneservices@gmail.com</span>
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <h3>Some Links</h3>
            </li>
            <li>
              <span>&#62;</span>
              <NavLink to="/" className="navlink">
                Home
              </NavLink>
            </li>
            <li>
              <span>&#62;</span>
              <NavLink to="/services" className="navlink">
                Services
              </NavLink>
            </li>
            <li>
              <span>&#62;</span>
              <NavLink to="/about" className="navlink">
                About Us
              </NavLink>
            </li>
            <li>
              <span>&#62;</span>
              <NavLink to="/career" className="navlink">
                Career
              </NavLink>
            </li>
            <li>
              <span>&#62;</span>
              <NavLink to="/contact" className="navlink">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Our Services</h3>
            </li>
            <li>
              <span>&#62;</span>
              <NavLink to="/services" className="navlink">
                Technology Studies
              </NavLink>
            </li>
            <li>
              <span>&#62;</span>
              <NavLink to="/services" className="navlink">
                Frontend Developer
              </NavLink>
            </li>
            <li>
              <span>&#62;</span>
              <NavLink to="/services" className="navlink">
                Backend Developer
              </NavLink>
            </li>
            <li>
              <span>&#62;</span>
              <NavLink to="/services" className="navlink">
                Full Stack Developer
              </NavLink>
            </li>
            <li>
              <span>&#62;</span>
              <NavLink to="/services" className="navlink">
                Other Courses
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-lower-div">
        <p>© Copyright Bhoomi Techzone. All Rights Reserved</p>
        <div className="social-icons">
          <a href="https://wa.me/8130787194" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61550017448926" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/bhoomitechzoneservices/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/bhoomi-techzone-services/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:official@bhoomitechzoneservices.com? subject=Hello! &body=write your message." target="_blank" rel="noreferrer">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;


