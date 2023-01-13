import React from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaCode} from 'react-icons/fa'

export default function Navbar() {
  return (
    <>
        <div className='navbar-container'>
            <h1><FaCode/></h1>
            <h1>F.S Portfolio</h1>
            <h1><GiHamburgerMenu/></h1>
        </div>
    </>
  )
}
