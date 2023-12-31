import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
//import Hero from '../components/Hero'
import Footer from '../components/Footer'
//import intro from '../assets/intro.jpg'
//import video2 from '../assets/video2.mp4'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { SiFirebase, SiReactrouter, SiTypescript, SiTailwindcss } from 'react-icons/si'
import {
    FaLinkedinIn,
    FaCode,
    FaGitAlt,
    FaReact, FaHtml5, FaCss3, FaJsSquare,
} from 'react-icons/fa'
import Technologies from '../components/Technologies'


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='homeHero-div'>
                <div>
                    <span className='small-tag'>Hi, I'm Pritam <FaCode className='facode' /></span>
                    <h2>A <span className='visbyfont'>Frontend Developer</span> with a passion of  coding,
                        design and bringing ideas to
                        life. <span className='oneliner'> One line of code at a time.</span></h2>

                    <div className='btn-container'>
                        <Link className='btn' to='/Project'>Project</Link>
                        <Link className='round-btn github' to='https://github.com/anynomous001 '><BsGithub className='github-icon' /></Link>
                        <Link className='round-btn github' to='/Contact '><FaLinkedinIn className='github-icon' /></Link>
                        <Link className='round-btn github' to='/Contact '><MdEmail className='github-icon' /></Link>
                    </div>
                </div>
            </div>
            <Technologies />
            <Footer />
        </div>
    )
}

export default Home