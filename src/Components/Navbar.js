import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Images/logo.png";
import Login from "./Login";

const Navbar = () => {
  const [menu, setMenu] = useState("menu-list");
  const [open, setOpen] = useState(false);

  const openDialog = () =>{
    setOpen(true)
  }

  const showMenu = () => {
    if (menu === "show-menu") {
      setMenu("menu-list");
    } else {
      setMenu("show-menu");
    }
  };
  return (
    <div className="navbar">
      <img src={Logo} alt="" />
      <ul className={menu}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/placementandtraining">Placement & Training</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/career">Careers</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
        <li onClick={() => openDialog()}>
          Login
        </li>
      </ul>
      <Login open={open} setOpen={setOpen}/>
      <span style={{ display: "none" }} className="menu-btn" onClick={showMenu}>
        Menu
      </span>
    </div>
  );
};

export default Navbar;
