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
    <Hero />
    <About />
    <Education />
    {/* <TopProject /> */}
    {/* <Marquee /> */}
    <Skills />
    <Projects />
    <Contact />
    {/* <CTA /> */}
    </>
  )
}

export default Home
