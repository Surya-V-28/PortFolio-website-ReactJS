import React from "react";
import "./NavbarStyle.css";
import { useState } from "react";

import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

// Inside your component's render method
// {/* <NavLink to="/another-page">Go to Another Page</NavLink> */}
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="NavBar-top-class">
      <a href="/" style={{color:'black'}}>
      <h1 className="Portfolio-name-navBar">Protfolio.</h1></a>
      <ul className={`NavBar-ul-list ${isOpen && "open"}`}>
        <li className="NavBar-li-list">
          <NavLink to="/" className="link-navBar-list">
            Home
          </NavLink>
        </li>
        <li className="NavBar-li-list">
          
          <NavLink to="/about" className="link-navBar-list">
            About
          </NavLink>
        </li>
        <li className="NavBar-li-list">
          <NavLink    to="/project" className="link-navBar-list">
            {" "}
            Project
          </NavLink>
        </li>
        <li className="NavBar-li-list">
          <NavLink to="/contact" className="link-navBar-list">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="NavBar-li-list-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <AiOutlineClose
            style={{ fontSize: "44px", color: "black" }}
          ></AiOutlineClose>
        ) : (
          <AiOutlineMenuUnfold
            style={{ fontSize: "45px", color: "black" }}
          ></AiOutlineMenuUnfold>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
