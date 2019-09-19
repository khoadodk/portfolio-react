import React from 'react';
import './Projects.scss';

const Projects = ({projects}) => {
    return (
        <section id="projects">
            <h1>PROJECTS</h1>
            <div className="card">
                {projects.map(project => {
                    return (
                        <div className="container">
                            <h2>{project.title}</h2>
                            <img            
                                src={`../../images/${project.type}`}
                                alt="project type"
                            />
                            <div className="img-container" key={project.id}>
                                <img            
                                    src={`../../images/${project.img}`}
                                    alt="project"
                                    className="card-img"
                                />
                                <div className="project-buttons">
                                    <p>{project.description}</p>
                                    <button><a href={project.github} target="_blank" rel="noopener noreferrer">github</a></button> 
                                    <button><a href={project.demo} target="_blank" rel="noopener noreferrer">live demo</a></button>
                                </div>  
                            </div>
                            <hr />   
                        </div>
                                         
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
