import React, { useState } from 'react'
import { ChangeEvent } from 'react'
import './Contact.css'
import { BsLinkedin } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { RiContactsLine } from 'react-icons/ri'
import img from '../images/femoji-guiño.png'
import img2 from '../images/femoji-feliz.png'

export const Contact = () => {

  const [email, setEmail] = useState("")
  const [asunto, setAsunto] = useState("")
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")

  const [selected, setSelected] = useState("mail")

  const handleSelection = (sel) => {
    setSelected(sel)
  }


  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangeAsunto = (e) => {
    setAsunto(e.target.value)
  }
  const handleChangeMessage = (e) => {
    setMessage(e.target.value)
  }
  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  return (
    <div id='contact'>
        <div className='contact-container-not-responsive'>
          <div className='imges-contact-container'>
            <div className='contact-img-title-container'>
              <h1>Contactame</h1>
              <div className='contact-img-container'>
                <img id='changeImg'/>
              </div>
            </div>
            <div className='contact-options'>
              <FiMail id='mail' onClick={()=> handleSelection("mail")}/>
              <RiContactsLine id='contacts'onClick={()=> handleSelection("contacts")}/>
            </div>
          </div>
          { selected === "mail" ?
          <form action="https://formsubmit.co/d7b40121bb90194c6d47349e01aff4c1" method="POST">
            <div className='md-textbox'>
              <input type={'text'} name="name" onChange={(e) => handleChangeName(e)} className={`${email ? "has-value" : ""}`}/>
              <label htmlFor='textbox'>Nombre</label>
            </div>
            <div className='md-textbox'>
              <input type={'email'} name="email" onChange={(e) => handleChangeEmail(e)} className={`${email ? "has-value" : ""}`}/>
              <label htmlFor='textbox'>Tu mail</label>
            </div>
            <div className='md-textbox'>
              <input type={'text'} name="asunto" onChange={(e) => handleChangeAsunto(e)} className={`${asunto ? "has-value" : ""}`}/>
              <label htmlFor='textbox'>Asunto</label>
            </div>
            <div className='md-textbox'>
              <textarea id='msj' name='mensaje' type={'text'} onChange={(e) => handleChangeMessage(e)} className={`${message ? "has-value2" : ""}`}/>
              <label htmlFor='textbox'>Mensaje</label>
            </div>
            <button type='submit'>Enviar</button>
          </form>:
          <div className='contact-data'>
            <h1>Otras formas</h1>
            <h2 onClick={()=> window.open("https://www.linkedin.com/in/federico-sena/", "_blank")}><BsLinkedin/><span>LinkedIn</span></h2>
            <h2>Telefono: +54 1156233716</h2>
          </div>
          }
        </div>
        <div className='contact-container-responsive'>
          <div className='imges-contact-container'>
            <div className='contact-img-title-container'>
              <h1>Contactame</h1>
              <div className='contact-img-container'>
                <img id='changeImg'/>
              </div>
            </div>
            <div className='contact-options'>
              <FiMail id='mail' onClick={()=> handleSelection("mail")}/>
              <RiContactsLine id='contacts'onClick={()=> handleSelection("contacts")}/>
            </div>
          </div>
          { selected === "mail" ?
          <form action="https://formsubmit.co/fedesena2000@gmail.com" method="POST">
            <div className='md-textbox'>
              <input type={'text'} name="name" onChange={(e) => handleChangeName(e)} className={`${email ? "has-value" : ""}`}/>
              <label htmlFor='textbox'>Nombre</label>
            </div>
            <div className='md-textbox'>
              <input type={'email'} onChange={(e) => handleChangeEmail(e)} className={`${email ? "has-value" : ""}`}/>
              <label htmlFor='textbox'>Tu mail</label>
            </div>
            <div className='md-textbox'>
              <input type={'text'} onChange={(e) => handleChangeAsunto(e)} className={`${asunto ? "has-value" : ""}`}/>
              <label htmlFor='textbox'>Asunto</label>
            </div>
            <div className='md-textbox'>
              <textarea id='msj' type={'text'} onChange={(e) => handleChangeMessage(e)} className={`${message ? "has-value2" : ""}`}/>
              <label htmlFor='textbox'>Mensaje</label>
            </div>
            <button>Enviar</button>
          </form>:
          <div className='contact-data'>
            <h1>Otras formas</h1>
            <h2 onClick={()=> window.open("https://www.linkedin.com/in/federico-sena/", "_blank")}><BsLinkedin/><span>LinkedIn</span></h2>
            <h2>Telefono: +54 1156233716</h2>
          </div>
          }
        </div>
    </div>
  )
}

export default Contact
