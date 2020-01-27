import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import projects from './data/projectsData';

//Components
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  componentDidMount() {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000,
      delay: 100,
      disable: 'mobile'
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Skills />
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
