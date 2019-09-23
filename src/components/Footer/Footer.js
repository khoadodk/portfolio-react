import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer" style={{display: "flex", alignItems: "center"}}>
            <p className='text-title'>
                copyright&copy; Khoa Do {new Date().getFullYear()}. all rights reserved  {" "}
            </p>
            <a href='https://github.com/khoadodk/portfolio-react' target="_blank" rel="noopener noreferrer"><FaGithub /> Source Code</a>
        </div>
    )
}

export default Footer;