import React from 'react'
import style from './Navbar.module.css'

const NavBar =()=>{
return(
    <nav className={style.nav}>
        <li><a>Profile</a></li>
        <li><a>Message</a></li>
        <li><a>News</a></li>
        <li><a>Music</a></li>
        <li><a>Settings</a></li>
    </nav>
)

}


export default NavBar;