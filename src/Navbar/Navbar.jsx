import React, { useState } from "react";
import profile from "./pic.jpeg";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("about"); // default active

  return (
    <nav className="navbar">
     
      <div className="nav-left">
        <img src={profile} alt="profile" className="profile-pic" />
        <span className="name">Ayesha H</span>
      </div>

      <ul className="nav-right">
        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => setActive("about")}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="/Ayesha H Resume.pdf"
            download
            className="resume-btn"
            onClick={() => setActive("resume")}
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
