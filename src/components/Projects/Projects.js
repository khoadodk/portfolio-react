import React from 'react';
import './Projects.scss';

const Projects = ({projects}) => {
    return (
        <section id="projects">
            <h1>PROJECTS</h1>
            <div className="card">
                {projects.map(project => {
                    return (
                        <div className="container" key={project.id}>
                            <h2>{project.title}</h2>
                            <img            
                                src={`../../images/${project.type}`}
                                alt="project type"
                            />
                            <div className="img-container">
                                <img            
                                    src={`../../images/${project.img}`}
                                    alt="project"
                                    className="project-img"
                                />
                                <div className="project-buttons">
                                    <p>{project.description}</p>
                                    <button><a href={project.github} target="_blank" rel="noopener noreferrer">github</a></button> 
                                    <button><a href={project.demo} target="_blank" rel="noopener noreferrer">live demo</a></button>
                                </div>  
                            </div>  
                        </div>
                                         
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
