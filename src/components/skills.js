import React from 'react'
import './Skills.css'
import developer from '../assets/dev.png'

const skills = () => {
    return (
        <div className='container5'>
            <div className='top-bg'>
                <div className='dark'></div>
                <div className='light'></div>
            </div>

            <main className='main-container'>
                <div class="type">
                    <h1>Skills define Future</h1>
                    <p>Register now for the ultimate drone racing event. 5 mile courses and over $10 million in prize money!</p>
                </div>
                <div class="dev-image-container">
                    <img className='dev-img' src={developer} />
                </div>
            </main>

            <div className='skill-container'>
                <div className='react-div'><img />React</div>
                <div className='Html-div'><img />HTML</div>
                <div className='css-div'><img />CSS</div>
                <div className='javascript-div'><img />Java-Script</div>
            </div>
        </div>
    )
}

export default skills