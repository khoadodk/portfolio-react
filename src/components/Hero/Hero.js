import React, { Component } from 'react';
import Typed from 'react-typed';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Hero.scss';

class Hero extends Component {
    render(){
        const strings = [
            "I'm a Front-End Developer",
            "Graduate from Wake Tech Coding Bootcamp",
            "Lover of technology (...especially Blockchain and Crypto)",
            "A few of my skills are HTML, CSS, JS, React, mySQL",
            "I currently strengthen my Node, React skills ",
            "I pass my free time at the gym, reading books, and travel"
        ]
        return (
            <section id="hero">
                <div className="hero">   
                    <h1 className="text-title">I'M KHOA DO</h1>
                    <Typed
                        className="typed"
                        strings={strings}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                    </Typed>
                    <div className="social-icons">
                        <a href="https://github.com/khoadodk" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/khoa-do-a80148188/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.facebook.com/dkyanh" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    </div>
                </div>    
            </section>
        )
    }
}

export default Hero;
