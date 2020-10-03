import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneExperiment } from 'react-icons/ai';
import { FaTimes, FaBars } from 'react-icons/fa';
import './Navbar.css';

import { navbarItems } from './Data';

function Navbar() {

    const [ click, setClick ] = useState(false);
    const [ button, setButton ] = useState(true);

    const handleClick = () => setClick(!click);

    return (
        <nav className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo' >
                    <AiTwotoneExperiment className='navbar-icon' />
                        EDM & Ravers
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {navbarItems.map(( data, key)=>{
                        return(
                            <li key={key} className={data.class}>
                                <Link to={data.to} className={data.subClass}>
                                {data.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
