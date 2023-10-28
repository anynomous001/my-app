import React from 'react'
import './HeroStyle.css'

import { Link } from 'react-router-dom'

const Hero = ({ headline, img }) => {
    return (
        <div className='hero'>
            <div className='hero-img-holder'>
                <img className='hero-img' src={img} alt='' />
            </div>
            <div className='content'>
                <p>Hi there</p>
                <h1>{headline}</h1>
                <div>
                    <Link className='btn' to='/Project'>Project</Link>
                    <Link className='btn trans' to='/Contact '>Contact</Link>

                </div>
            </div>
        </div>
    )
}

export default Hero