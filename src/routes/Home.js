import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
//import intro from '../assets/intro.jpg'
import video2 from '../assets/video2.mp4'


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero video={video2} headline={"I'm a Frontend Developer."} />
            <Footer />
        </div>
    )
}

export default Home