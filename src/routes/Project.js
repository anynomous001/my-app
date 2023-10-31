import React from 'react'
import Navbar from '../components/Navbar'
import Hero2 from '../components/Hero2'
import Footer from '../components/Footer'
/*import project from '../assets/project.jpg'
import PricingCards from '../components/PricingCards'*/
import Projects from '../components/Projects'
import video1 from '../assets/video1.mp4'


const Project = () => {
    // script.js


    return (
        <div >
            <Navbar />
            <Hero2
                video={video1}
                headline={"My Projects."}
                text={'Some of my recent Projects'}
            />
            {/*<PricingCards />*/}
            <div className='headline-div'>
                <h1 className='project-headline' >My Projects</h1>
                <h4 className='sub-headline'>Note that the development build is not optimized.
                    To create a production build, use npm run build.
                    webpack compiled successfully</h4>
            </div>
            <Projects />
            <Footer />
        </div>
    )
}

export default Project 