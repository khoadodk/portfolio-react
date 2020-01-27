import React from 'react';
import './Skills.scss';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaAws } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';

const Skills = () => {
  return (
    <section id="skills">
      <div className="heading">
        <h1>PRINCIPLES & SKILLS</h1>

        <div className="card-container">
          <div className="card" data-aos="slide-right">
            <div className="icon-img">
              <i className="fa fa-code" style={{ color: '#0288d1' }}></i>
            </div>
            <h4>foundation</h4>
            <p>
              Focus on learning the fundamentals of one language and be the
              master of it.
            </p>
          </div>
          <div className="card">
            <div className="icon-img">
              <i className="fa fa-comments" style={{ color: '#d14702' }}></i>
            </div>
            <h4>communication</h4>
            <p>Good communication beats thousands of lines of good code</p>
          </div>
          <div className="card" data-aos="slide-left">
            <div className="icon-img">
              <i className="fa fa-book" style={{ color: '#d1ae02' }}></i>
            </div>
            <h4>always be learning</h4>
            <p>80% of studying and 20% of writing code.</p>
          </div>
        </div>
      </div>

      <div className="quote">
        <q>
          The future belongs to those who learn more skills and combine them in
          creative ways --- Robert Greene
        </q>
      </div>
      <div className="skills-icons" data-aos="fade-down">
        <FaHtml5 className="icon" title="HTML5"></FaHtml5>
        <FaCss3 className="icon" title="CSS3" />
        <FaJs className="icon" title="JavaScript" />
        <FaReact className="icon" title="React.js" />
        <FaNode className="icon" title="Node.js" />
        <DiMongodb className="icon" title="MongoDB" />
        <FaAws className="icon" title="AWS" />
      </div>
      <hr />
    </section>
  );
};

export default Skills;
