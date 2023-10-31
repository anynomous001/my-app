import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import Skills from '../components/skills'
import { PiHandWaving } from 'react-icons/pi'

const About = () => {
    return (
        <div className='aboutHero-div-container'>
            <Navbar />
            <div className='aboutHero-div'>
                <div className='intro-div'>
                    <span className='opener-tag'><PiHandWaving className='waving' />Hi, I'm Pritam Chakroborty</span>
                    <h2 className='greetings'>Nice to meet you !</h2>

                    <div className='btn-container'>

                    </div>
                </div>

            </div>
            {/*<Skills />*/}
            <Footer />
        </div>
    )
}

export default About