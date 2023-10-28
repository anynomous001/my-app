import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import intro from '../assets/intro.jpg'


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero img={intro} headline={"I'm a Frontend Developer."} />
            <Footer />
        </div>
    )
}

export default Home