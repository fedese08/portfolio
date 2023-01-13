import React, { useEffect, useState } from 'react'
import img from '../images/femoji-saludando.jpg'
import './Home.css'

export default function Home() {

  return (
    <>
      <div id='home' >
        <div className='home-container-not-responsive'>
          <div className='img-home-container'>
            <div>
              <img src={img}/>
              <div className='home-buttons'>
                <button onClick={()=> window.location.href='#contact'}>Contactame</button>
                <button onClick={()=> window.open("https://fedesena-linktree.netlify.app/", "_blank")}>Mas de mi</button>
              </div>
            </div>
            </div>
            <div className='home-info-container'>
              <h1>Hola! <span id='hand-wave'>👋</span> , soy <span>Federico</span></h1>
              <h2>Estudiante Ingenieria en Informatica - Front-end Developer</h2>
            </div>
        </div>
        <div className='home-container-responsive'>
          <div className='home-info-container'>
            <h1>Hola! <span id='hand-wave'>👋</span> , soy <span>Federico</span></h1>
            <h2>Estudiante Ingenieria en Informatica - Front-end Developer</h2>
          </div>
          <div className='img-home-container'>
            <div>
              <img src={img}/>
              <div className='home-buttons'>
                <button onClick={()=> window.location.href='#contact'}>Contactame</button>
                <button onClick={()=> window.open("https://fedesena-linktree.netlify.app/", "_blank")}>Mas de mi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
