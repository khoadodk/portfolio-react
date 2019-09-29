import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer" style={{textAlign:"center", fontWeight:"bolder" }}>
            <p className='text-title'>
                Site By Khoa Do {new Date().getFullYear()}
            </p>
            <a href='https://github.com/khoadodk/portfolio-react' target="_blank" rel="noopener noreferrer">
                <FaGithub /> Source Code
            </a>
        </div>
    )
}

export default Footer;