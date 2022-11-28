import React from 'react'
import { useRef } from 'react';
import '../css/nav.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

    let navRef = useRef(null);

    const chng = () => {
        console.log('connected')
        navRef.current.classList.toggle('open');
    }

    return (
        <>
            <div className="nav">
                <div className="nav-content">
                    <div className="logo">
                        <h1>NavLogo</h1>
                    </div>
                    <div className="menu" ref={navRef}>
                        <a href="#home" className='links'>Home</a>
                        <a href="#blog" className='links'>blog</a>
                        <a href="#feature" className='links'>feature</a>
                        <a href="#service" className='links'>service</a>
                        <a href="#about" className='links'>about</a>
                        <a href="#contact" className='links'>contact</a>
                    </div>
                    <button className='bar' onClick={chng}>
                        <FaBars />
                    </button>
                </div>
            </div>

        </>
    )
}

export default Navbar