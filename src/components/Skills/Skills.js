import React from 'react';
import './Skills.scss';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaBootstrap,
  FaSass
} from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';

const Skills = () => {
  return (
    <section id="skills">
      <div className="heading">
        <h1>ABOUT ME</h1>
        <p>
          I was working numerous jobs from retail stores to restaurants, playing
          computer games every night, not knowing where I was going in life...
          Then I started this journey 2 years ago and haven't looked back. I
          code everyday and crave to learn new technologies.
        </p>
      </div>

      <div className="heading">
        <h1>SKILLS</h1>
      </div>
      <div className="skills-icons" data-aos="fade-down">
        <FaHtml5 className="icon" title="HTML5"></FaHtml5>
        <FaCss3 className="icon" title="CSS3" />
        <FaSass className="icon" title="SASS" />
        <FaBootstrap className="icon" title="BootStrap" />
        <FaJs className="icon" title="JavaScript" />
        <FaReact className="icon" title="React.js" />
        <FaNode className="icon" title="Node.js" />
        <DiMongodb className="icon" title="MongoDB" />
      </div>
    </section>
  );
};

export default Skills;
