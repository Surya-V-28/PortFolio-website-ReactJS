import React from "react";
import "./NavbarStyle.css";
import { useState } from "react";

import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="NavBar-top-class">
      <h1 className="Portfolio-name-navBar">Protfolio</h1>
      <ul className={`NavBar-ul-list ${isOpen && "open"}`}>
        <li className="NavBar-li-list">
          <a href="/" className="link-navBar-list">
            Home
          </a>
        </li>
        <li className="NavBar-li-list">
          <a href="/about" className="link-navBar-list">
            About
          </a>
        </li>
        <li className="NavBar-li-list">
          <a href="/project" className="link-navBar-list">
            {" "}
            Project
          </a>
        </li>
        <li className="NavBar-li-list">
          <a href="/contact" className="link-navBar-list">
            Contact
          </a>
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
