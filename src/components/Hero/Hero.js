import React, { Component } from 'react';
// import Typed from 'react-typed';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import './Hero.scss';
import Particles from 'react-particles-js';

class Hero extends Component {
  render() {
    // const strings = [
    //   "I'm a Full Stack Front-End Focused Developer",
    //   'Specialize in MERN stack',
    //   'Graduated from Wake Tech Coding Bootcamp 2019',
    //   'I am currently learning GraphQL and Django',
    //   'I pass my free time at the gym, reading books, and listening to SWE podcasts',
    //   'Scroll down to read more about me'
    // ];
    const params = {
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: '#000',
            blur: 1
          }
        },
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 1200
          }
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          }
        }
      }
    };

    return (
      <section id="hero">
        <div className="hero">
          <Particles params={params} className="particle" />
          <div className="hero-container">
            <div className="text-title">
              <h1>I'M KHOA DO</h1>
              <h4>
                I was working numerous jobs from retail stores to restaurants,
                playing computer games every night, not knowing where I was
                going in life... Then I started this journey 2 years go and
                haven't looked back. I code everyday and crave to learn new
                technologies .
              </h4>
            </div>
            {/* <Typed
              className="typed"
              strings={strings}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></Typed> */}

            <div className="social-icons">
              <a
                href="https://github.com/khoadodk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/khoa-do-a80148188/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.codewars.com/users/khoadodk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
