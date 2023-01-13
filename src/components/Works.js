import React from 'react'
import './Works.css'
import img from '../images/femoji-compu.png'
import {WORKS} from '../data/works.js'

export default function Works() {
  return (
    <>
        <div id='works'  >
          <div className='works-main-container-not-responsive'>
            <div className='work-container'>
              {WORKS.map( (w,index) => {
                return (
                  <div className='work' key={index}>
                    <h2>{w.title}</h2>
                    <div className='langs'>
                      {w.lang.map((l,index) => {
                        return <h3 key={index}>{l}</h3>
                      })}
                    </div>
                    <div className='work-buttons'>
                      <button onClick={() => window.open( w.urlGit, "_blank")}>Git</button>
                      <button onClick={() => window.open( w.urlPage, "_blank")}>Live</button>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='img-title-container'>
              <div className='img-container'>
                <img src={img}/>
              </div>
              <div className='title-container'>
                <h1>Proyectos</h1>
              </div>
            </div>
          </div>
          <div className='works-main-container-responsive'>
            <div className='img-title-container'>
              <div className='title-container'>
                <h1>Proyectos</h1>
              </div>
            </div>
            <div className='work-container'>
              {WORKS.map( (w,index) => {
                return (
                  <div className='work' key={index}>
                    <h2>{w.title}</h2>
                    <div className='langs'>
                      {w.lang.map((l,index) => {
                        return <h3 key={index}>{l}</h3>
                      })}
                    </div>
                    <div className='work-buttons'>
                      <button onClick={() => window.open( w.urlGit, "_blank")}>Git</button>
                      <button onClick={() => window.open( w.urlPage, "_blank")}>Live</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    </>
  )
}
