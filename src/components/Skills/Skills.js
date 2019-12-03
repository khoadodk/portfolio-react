import React from 'react';
import './Skills.scss';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id='skills'>
      <div className='heading'>
        <h1>PRINCIPLES & SKILLS</h1>
        <div className='card-container'>
          <div className='card'>
            <h4>foundation</h4>
            <p>
              Focus on learning the fundamentals of one language and be the
              master of it.
            </p>
          </div>
          <div className='card'>
            <h4>communication</h4>
            <p>Good communication beats thousands of lines of good code</p>
          </div>
          <div className='card'>
            <h4>always be learning</h4>
            <p>80% of studying and 20% of writing code.</p>
          </div>
        </div>
      </div>

      <div className='quote'>
        <q>
          The future belongs to those who learn more skills and combine them in
          creative ways --- Robert Greene
        </q>
      </div>
      <div className='skills-icons'>
        <FaHtml5 className='icon' title='HTML5'></FaHtml5>
        <FaCss3 className='icon' title='CSS3' />
        <FaJs className='icon' title='Javascript' />
        <FaReact className='icon' title='ReactJS' />
        <FaNode className='icon' title='NodeJS' />
      </div>
      <hr />
    </section>
  );
};

export default Skills;
