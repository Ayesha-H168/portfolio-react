import React from "react";
import profile from "../Navbar/pic.jpeg";
import "./Hero.css";

const Hero = () => {

  const goToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const goToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      
      <div className="hero-left">
        <h1>Hi, I’m Ayesha H</h1>
        <h2>Frontend Developer</h2>
        <p>
          I build clean, responsive, and user-friendly web applications using React.
        </p>

        <div className="hero-buttons">
          <button className="btn primary" onClick={goToContact}>
            Contact Me
          </button>

          <button className="btn secondary" onClick={goToProjects}>
            View Projects
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="Ayesha H profile" />
      </div>

    </section>
  );
};

export default Hero;