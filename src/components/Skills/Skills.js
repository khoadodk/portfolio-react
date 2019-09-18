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
                <FaHtml5 className="icon" style={{color: "orangered"}} />
                <FaCss3 className="icon" style={{color: "Dodgerblue"}} />
                <FaJs className="icon" style={{color: "#F0DB4F"}} />
                <FaReact className="icon" style={{color: "Dodgerblue"}} />
                <FaNode className="icon" style={{color: "green"}} />
            </div>
        </section>
    )
}

export default Skills;
