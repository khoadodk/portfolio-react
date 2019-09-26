import React, { Component } from 'react';
import './NavBar.scss';
import { FaBars, FaDev } from 'react-icons/fa';


class NavBar extends Component {
    burgerToggle = () => {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
        }
    }
    render() {
        return (
            <nav>
                <div className="navWide">    
                    <div className="wideDiv">
                        <FaDev className="dev" />
                        <a href="#hero">About Me</a>
                        <a href="#skills">Skills</a>
                        <a href="#prohjects">Projects</a>
                        <a href="#contact">Contact Me</a>
                        <a href="https://www.dropbox.com/s/m72oksc4vxddyek/Resume%20%281%29.pdf?dl=0" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
                <div className="navNarrow">
                    <FaBars className="nav-icon" onClick={this.burgerToggle} />
                    <div className="narrowLinks">
                        <a href="#hero" onClick={this.burgerToggle}>About Me</a>
                        <a href="#skills" onClick={this.burgerToggle}>Skills</a>
                        <a href="#projects" onClick={this.burgerToggle}>Projects</a>
                        <a href="#contact" onClick={this.burgerToggle}>Contact Me</a>
                        <a href="https://www.dropbox.com/s/m72oksc4vxddyek/Resume%20%281%29.pdf?dl=0" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
            </nav>
            );
    }
}
export default NavBar
