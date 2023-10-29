import React from 'react'
import './Projects.css'
import { ProjectData } from './ProjectData'
import project from '../assets/project.jpg'


const Projects = () => {
    const data = ProjectData.map((item) => {
        return (
            <div key={Math.random()} className='projectcard'>
                <img src={project} alt='Project-photo' />
                <h4>{item.name}</h4>
                <p>{item.about}</p>
                <div>
                    <a href={item.view} className='view' >View</a>
                    <a href={item.source} className='source'>source</a>
                </div>
            </div >
        )
    })

    return (

        <div className='projectcardcontainer'>
            {data}
        </div>
    )
}

export default Projects