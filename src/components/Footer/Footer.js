import React from 'react';
import './Footer.scss';
import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div id="footer">
            <p className='text-title'>
                Site By Khoa Do {new Date().getFullYear()}
            </p>
            <div className="code-link">
                <FaGithub />
                <a href='https://github.com/khoadodk/portfolio-react' target="_blank" rel="noopener noreferrer">
                    Code
                </a>
            </div>
        </div>
    )
}

export default Footer;