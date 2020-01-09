import React from 'react';
import './Footer.scss';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div id='footer'>
      <p className='text-title'>Khoa Do &copy; 2019</p>
      <div className='code-link'>
        <a
          href='https://github.com/khoadodk/portfolio-react'
          target='_blank'
          rel='noopener noreferrer'>
          <FaGithub />
          &nbsp; Code
        </a>
      </div>
    </div>
  );
}

export default Footer;
