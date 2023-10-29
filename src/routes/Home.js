import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
//import Hero from '../components/Hero'
import Footer from '../components/Footer'
//import intro from '../assets/intro.jpg'
//import video2 from '../assets/video2.mp4'


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='homeHero-div'>
                <div>
                    <span>Hi, I'm Pritam</span>
                    <h2>A Frontend Developer with a passion of coding, design and bringing ideas to <br></br>
                        life.<span> One line of code at a time.</span></h2>
                </div>

            </div>
            {/*<Hero video={video2} headline={"I'm a Frontend Developer."} />*/}
            <Footer />
        </div>
    )
}

export default Home