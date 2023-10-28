import React from 'react'
import Navbar from '../components/Navbar'
import Hero2 from '../components/Hero2'
import Footer from '../components/Footer'
import about from '../assets/about.jpg'
import Skills from '../components/skills'

const About = () => {
    return (
        <div>
            <Navbar />
            <Hero2 img={about} headline={'About'} text={"I'm a friendly Frontend Developer"} />
            <Skills />
            <Footer />
        </div>
    )
}

export default About