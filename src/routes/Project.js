import React from 'react'
import Navbar from '../components/Navbar'
import Hero2 from '../components/Hero2'
import Footer from '../components/Footer'
/*import project from '../assets/project.jpg'
import PricingCards from '../components/PricingCards'*/
import Projects from '../components/Projects'
import video1 from '../assets/video1.mp4'


const Project = () => {

    return (
        <div>
            <Navbar />
            <Hero2
                video={video1}
                headline={"My Projects."}
                text={'Some of my recent Projects'}
            />
            {/*<PricingCards />*/}
            <Projects />
            <Footer />
        </div>
    )
}

export default Project