import React, { useEffect, useState } from 'react'
import './Skills.css'
import {skills} from '../data/skills'
import img from '../images/femoji-idea.png'

export default function Skills() {

  return (
    <>
        <div id='skills' >
            <div className='skills-section-container-not-responsive' >
                <div className='skill-title-img'>
                    <div className='skill-title'>
                        <h1>Conocimientos</h1>
                    </div>
                    <div className='skill-img-container'>
                        <img src={img}/>
                    </div>
                </div>
                <div className='skills-container'>
                    {
                        skills.map((skill,index) => {
                            return (
                                <div className='skill-info' key={index}>
                                    <img src={skill.url}/>
                                    <h2>{skill.name}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='skills-section-container-responsive' >
                <div className='skill-title-img'>
                    <div className='skill-title'>
                        <h1>Conocimientos</h1>
                    </div>
                </div>
                <div className='skills-container'>
                    {
                        skills.map((skill,index) => {
                            return (
                                <div className='skill-info' key={index}>
                                    <img src={skill.url}/>
                                    <h2>{skill.name}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}
