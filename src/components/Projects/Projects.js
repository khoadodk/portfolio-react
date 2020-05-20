import React from "react";
import "./Projects.css";

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <h1>PROJECTS</h1>
      <div className="card">
        {projects.map((project) => {
          let imageType = project.type.map((img, index) => (
            <img key={index} src={img} alt="project type" />
          ));
          return (
            <div
              className="container"
              key={project.id}
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <h2>{project.title}</h2>
              <div className="image-type">{imageType}</div>
              <div className="img-container">
                <img
                  src={`../../images/${project.img}`}
                  alt="project"
                  className="project-img"
                />
                <div className="project-buttons">
                  <div className="project-overlay">
                    <p>{project.description}</p>
                    <button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github
                      </a>
                    </button>
                    <button>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        live demo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
