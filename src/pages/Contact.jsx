import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Let’s Connect</h2>
      <p>
        I’m actively seeking frontend developer opportunities and open to
        collaborations. Feel free to reach out!
      </p>

      <div className="connect-links">
        <a
          href="mailto:2004ayeshah@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/ayesha-h"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Ayesha-H168"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
