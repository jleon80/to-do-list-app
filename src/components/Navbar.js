import React from 'react'
import '../css/Navbar.css'
import { FaClipboardList } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

//icons to use from https://react-icons.github.io/
// Font awesome pixel sizes relative to the multiplier. 
// 1x - 14px
// 2x - 28px
// 3x - 42px
// 4x - 56px
// 5x - 70px

function Navbar() {
    return (
        <nav className='navbar'>
            <figure>
                <FaClipboardList size={28} color='white' />
                <img src='' />
            </figure>
            <h1>To do List</h1>
            <FaBars size={28} color='white' />
            </nav>
    )
}

export default Navbar