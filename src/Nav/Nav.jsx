import React, { useState } from 'react'
import './Nav.css'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => setShowMenu(prev => !prev)
    return (
        <nav>
            <Hamburger toggleMenu={toggleMenu} showMenu={showMenu}></Hamburger>
            <div className={showMenu ? "nav-container nav-container-active" : "nav-container"}>
                <ul>
                    <Link className='nav-link' to='/basic'>
                        <li >
                            Basic
                        </li>
                    </Link>
                    <Link className='nav-link' to='/usescrollbasic'>
                        <li >
                            UseScrollBasic
                        </li>
                    </Link>
                    <Link className='nav-link' to='/variants'>
                        <li>
                            Variants
                        </li>
                    </Link>
                    <Link className='nav-link' to='/layout'>
                        <li>
                            Layout
                        </li>
                    </Link>
                    <Link className='nav-link' to='/slider'>
                        <li>
                            Slider
                        </li>
                    </Link>
                    <Link className='nav-link' to='/layout-mini'>
                        <li>
                            Layout Mini
                        </li>
                    </Link>
                    <Link className='nav-link' to='/layout-mini-v2'>
                        <li>
                            Layout Mini v2
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
