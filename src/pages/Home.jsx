import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Marquee from '../sections/marquee'
import CTA from '../components/CTA'
import Contact from '../sections/Contact'
import Education from '../sections/Education'
import TopProject from '../sections/TopProject'

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="education">
        <Education />
      </section>
      
      {/* <TopProject /> */}
      {/* <Marquee /> */}
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      {/* <CTA /> */}
    </>
  )
}

export default Home