import React from 'react'
import { CiMenuBurger } from 'react-icons/ci';
import { AiOutlineClose } from "react-icons/ai";
const NavbarMain = () => {
    return (
        <>
            <header className="header">
                <a href="#" className="logo"> Logo</a>
                <input type='checkbox' id="check" />
                <label htmlFor="check" className='icons'>
                    <CiMenuBurger id='menu-icon' />
                    <AiOutlineClose id='close-icon' />
                </label>
                <nav className="navbar">
                    <a href="#" className='navitem' style={{ '--i': 0 }}>Home</a>
                    <a href="#" className='navitem' style={{ '--i': 1 }}>Projects</a>
                    <a href="#" className='navitem' style={{ '--i': 2 }}>Skills</a>
                    <a href="#" className='navitem' style={{ '--i': 3 }}>Study</a>
                    <a href="#" className='navitem' style={{ '--i': 4 }}>Contact Me</a>
                </nav>
            </header>
        </>
    );
}

export default NavbarMain