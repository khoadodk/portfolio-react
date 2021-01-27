import React from 'react';
import './Skills.css';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaBootstrap,
  FaSass,
  FaAws
} from 'react-icons/fa';
import { DiMongodb, DiLaravel } from 'react-icons/di';
import { GrGatsbyjs, GrGraphQl } from 'react-icons/gr';

const Skills = () => {
  return (
    <section id='skills'>
      <div className='heading'>
        <h1>ABOUT ME</h1>
        <p>
          I was working numerous jobs from retail stores to restaurants, playing
          computer games every night, not knowing where I was going in life...
          Then I started this coding journey 2 years ago and haven't looked
          back. I code everyday and try to add more technologies to my stack
          below.
        </p>
      </div>

      <div className='heading'>
        <h1>MY SKILLS</h1>
      </div>
      <div className='skills-icons'>
        <FaHtml5 className='icon' title='HTML5'></FaHtml5>
        <FaCss3 className='icon' title='CSS3' />
        <FaSass className='icon' title='SASS' />
        <FaBootstrap className='icon' title='BootStrap' />
        <FaJs className='icon' title='JavaScript' />
        <FaReact className='icon' title='React.js' />
        <GrGatsbyjs className='icon' title='Gatsby.js' />
        <GrGraphQl className='icon' title='GraphQL' />
        <FaNode className='icon' title='Node.js' />
        <DiMongodb className='icon' title='MongoDB' />
        <FaAws className='icon' title='Amazon Web Services' />
        <DiLaravel className='icon' title='Laravel' />
      </div>
    </section>
  );
};

export default Skills;
