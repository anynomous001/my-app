import React from 'react'
import './Technologies.css'
import { ProjectData } from './ProjectData'
import project from '../assets/project.jpg'
import { BsGithub } from 'react-icons/bs'
import { SiFirebase, SiReactrouter, SiTypescript, SiTailwindcss } from 'react-icons/si'
import {
    FaLinkedinIn,
    FaCode,
    FaGitAlt,
    FaReact, FaHtml5, FaCss3, FaJsSquare,
} from 'react-icons/fa'

const Technologies = () => {

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
        <div className='home-skills-container'>
            <h1 className='home-project-header'>Some of my Projects</h1>
            <div className='home-projects-container'>
                <div className='flex-div'>
                    {data}

                </div>
            </div>
            <h1 className='home-skills-headline'>Technologies</h1>
            <p className='home-skills-subheadline'>that i use </p>
            <div className='skill-div'>
                <div className='first-row'><  FaCss3 className='skill-icon' />
                    <p>Some text </p>
                </div>
                <div className='first-row'><   FaJsSquare className='skill-icon' />
                    <p>Some text </p>
                </div>
                <div className='second-row'><  FaReact className='skill-icon' />
                    <p>Some text </p>
                </div>
                <div className='second-row'><FaGitAlt className='skill-icon' />
                    <p>Some text </p>
                </div>
                <div className='second-row'>< BsGithub className='skill-icon' />
                    <p>Some text </p>
                </div>
                <div className='second-row'>< SiFirebase className='skill-icon' />
                    <p>Some text </p>
                </div>
                <div className='third-row'><  SiReactrouter className='skill-icon' />
                    <p>Some text </p>
                </div>
                <div className='third-row'><  SiTypescript className='skill-icon' />
                    <p>Some text </p>
                </div>
                <div className='third-row'><   SiTailwindcss className='skill-icon' />
                    <p>Some text </p>
                </div>
            </div>
        </div>
    )
}

export default Technologies