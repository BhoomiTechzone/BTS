import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PAT from "../Images/pat.png";
import { Link, NavLink } from "react-router-dom";

const PlacementAndTraining = () => {

  return (
    <div className="placement-and-training">
      <Navbar />
      <div className="sub-navbar">
        <h3>Services</h3>
        <h3>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <span> / </span>
          <NavLink to="/placementandtraining" className="navlink">
            Placement & Training
          </NavLink>
        </h3>
      </div>
      <h2>Placement & Training</h2>
      <div className="placement-and-training-text">
        <div>
          <h3>From Knowledge to Career: Mastering Skills for Placement</h3>
          <p>
            At Bhoomi Techzone, we take immense pride in being the
            pioneers of providing industry-leading training across various
            domains. Our training programs are carefully curated by industry
            experts and designed to equip you with the skills and knowledge
            required to thrive in today's competitive world. We offer
            comprehensive training sessions that cover a wide range of domains,
            ensuring you receive the most up-to-date and relevant insights in
            your chosen field. Whether it's software development, data science,
            digital marketing, or any other cutting-edge domain, we have the
            expertise to make you proficient. But that's not all; at Bhoomi
            Techzone, we go the extra mile to secure your future. Our
            commitment to your success extends beyond training. We take pride in
            our strong industry connections and an extensive network of partners
            who actively seek to recruit our trained professionals. When you
            choose Bhoomi Techzone Services, you're not just investing in
            training; you're investing in your future career. We assure you of
            the best placement opportunities, where your skills will be
            recognized and valued. We take joy in witnessing our students grow
            and flourish in their chosen careers, making us one of the most
            trusted names in the industry. Choose Bhoomi Techzone Services for
            unparalleled training and a pathway to a successful and fulfilling
            career. career.
          </p>
        </div>
        <img src={PAT} alt="" />
      </div>
      <div className="placement-training">
        <h2>We Offer Training</h2>

        <div className="image-outer-main-container">
        <div className="image-outer-container">
          <div className="image-container">
            <Link to="/IT-Department" className="navlink">
              <img src="https://images.unsplash.com/photo-1637073849667-91120a924221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXQlMjBkZXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt=""/>
              <div className="text-overlay">
                <h3>IT Department</h3>
              </div>
            </Link>             
          </div>
        </div>

        <div className="image-outer-container">
          <div className="image-container">
            <Link to="/Non-IT-Department" className="navlink">
              <img src="https://images.unsplash.com/photo-1577401159468-3bbc7ee440b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5vbiUyMGl0JTIwZGVwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
              <div className="text-overlay">
                <h3>Non-IT Department</h3>
              </div>
            </Link>             
          </div>
        </div>

        <div className="image-outer-container">
          <div className="image-container">
            <Link to="/HR-Department" className="navlink">
              <img src="https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHIlMjBkZXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt=""/>
              <div className="text-overlay">
                <h3>HR Department</h3>
              </div>
            </Link>             
          </div>
        </div>

        <div className="image-outer-container">
          <div className="image-container">
            <Link to="/Sales-Department" className="navlink">
              <img src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbGVzJTIwZGVwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
              <div className="text-overlay">
                <h3>Sales Department</h3>
              </div>
            </Link>             
          </div>
        </div>

        <div className="image-outer-container">
          <div className="image-container">
            <Link to="/Software-Sales" className="navlink">
              <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mdHdhcmUlMjBzYWxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
              <div className="text-overlay">
                <h3>Software Sales</h3>
              </div>
            </Link>             
          </div>
        </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default PlacementAndTraining;
