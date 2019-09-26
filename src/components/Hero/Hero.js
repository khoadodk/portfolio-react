import React, { Component } from 'react';
import Typed from 'react-typed';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Hero.scss';
import Particles from 'react-particles-js';

class Hero extends Component {
    render(){
        const strings = [
            "I'm a Front-End Developer",
            "Graduate from Wake Tech Coding Bootcamp",
            "Lover of technology (...especially Blockchain and Crypto)",
            "A few of my skills are HTML, CSS, JS, React, mySQL",
            "I currently strengthen my Node, React skills ",
            "I pass my free time at the gym, reading books, and travel"
        ];
        const params = {
            particles: {
                line_linked: {
                    shadow: {
                        enable: true,
                        color: "#000",
                        blur: 1
                    }
                },
                number: {
                    value: 150,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                            "mode": "repulse"
                    }
                }
            }
        }

        return (
            <section id="hero">
                <div className="hero">
                <Particles 
                    params={params}
                    className="particle"
                />   
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
