import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navList } from './navData';

import '../../App.css';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    let currPage = useLocation().pathname;
    const navItems = navList.map(item => (

        <li key={item.id} className={currPage === `/${item.name.toLowerCase()}` ? 'nav-item active' : 'nav-item'}>
            <NavLink to={`/${item.name.toLowerCase()}`}   
             style={{display: "block", width: "100%", color: "inherit"}} 
            >
                {item.name}
            </NavLink>
        </li>
    ));
    
    return (
        <>
        <header>
            <nav className='nav-container'>
                <h1 className='logo'>Logo</h1>
                <ul className='nav-links'>{navItems}</ul>
            </nav>
        </header>
        </>
    )
}

export default Navbar;