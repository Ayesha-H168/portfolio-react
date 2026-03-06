import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Ayesha H</h3>
      <p>Frontend Developer | React Enthusiast</p>

      

      <p className="copyright">
        © {new Date().getFullYear()} Ayesha H. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
