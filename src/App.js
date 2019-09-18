import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import  projects   from './data/projectsData';

class App extends Component{
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Skills />
        <Projects  projects= {projects}/>
        <Contact />
      </div>
    )
  }
}
export default App


