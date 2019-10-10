import React from 'react';
import './Skills.scss';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from "react-icons/fa";


const Skills = () => {
    return (
        <section id="skills">
            <div className="heading">
                <h1>SKILLS</h1>
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
