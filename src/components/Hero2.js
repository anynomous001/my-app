import React from 'react'
import './Hero2Style.css'

const Hero2 = ({ video, headline, text }) => {
    return (
        <div className='hero2'>
            <div className='hero2-container'>
         {/*<img className='hero2-img' src={img} alt='' />      
        <video  src={video} autoplay muted loop/>*/}  
 <video className='hero2-img' autoPlay muted loop id="video-background">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>


            </div>
            <div className='hero2-content'>
                <h2> {headline}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Hero2