import React from 'react'
import './Projects.css'
import { ProjectData } from './ProjectData'
import intro from '../assets/intro.jpg'

const Projects = () => {
    const data = ProjectData.map((item) => {
        return (
            <div className='projectcard'>
                <img src={intro} />
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