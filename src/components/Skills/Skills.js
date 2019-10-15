import React from 'react';
import './Skills.scss';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from "react-icons/fa";


const Skills = () => {
    return (
        <section id="skills">
            <div className="heading">
                <h1>MY PRINCIPLES</h1>
                <div className="card-container">
                    <div className="card" >
                        <h4>foundation</h4>
                        <p>We don't use algorithms and data structures much at work. But I think understanding them will make us the better at problem solving. 
                            I focus on learning the fundamentals of one language and be the master of it.
                        </p>
                    </div>
                    <div className="card" >
                        <h4>clean, maintainable, scalable code</h4>
                        <p>Clean code will reduce frequency of bugs, long-term costs of maintenance 
                            and increase collaboration and productivity. So my aim is to write clean, simple, and easy to read code.
                        </p>
                    </div>
                    <div className="card" >
                        <h4>always learning</h4>
                        <p>The Imposter Syndrome is real and it is for the better good. 
                        The web technology is growing exponentially fast, thus I learn to learn and thrive the be the best learner in the room at any given time.   
                        </p>                    
                    </div>
                </div>
            </div>

            <div className="quote">
                <q>The future belongs to those who learn 
                    more skills and combine them in creative ways 
                    --- Robert Greene</q>
            </div>
            <div className="skills-icons">
                <FaHtml5 className="icon" title="HTML5"></FaHtml5>
                <FaCss3 className="icon" title="CSS3" />
                <FaJs className="icon" title="Javascript" />
                <FaReact className="icon" title="ReactJS" />
                <FaNode className="icon" title="NodeJS" />
            </div>
            <hr/>
        </section>
    )
}

export default Skills;
