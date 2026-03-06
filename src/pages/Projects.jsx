import React, { useState } from "react";
import "./Project.css";

const Projects = () => {
  const projectsData = [
    {
      title: "Portfolio Website",
      category: "React",
      description: "Personal responsive portfolio built using React.",
    },
    {
      title: "Weather App",
      category: "JavaScript",
      description: "Weather app using OpenWeather API.",
    },
    {
      title: "To-Do App",
      category: "React",
      description: "Task management app using React hooks.",
    },
    {
      title: "Landing Page",
      category: "HTML/CSS",
      description: "Responsive landing page design.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section className="projects">
      <h2>My Projects</h2>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        {["All", "React", "JavaScript", "HTML/CSS"].map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS */}
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
