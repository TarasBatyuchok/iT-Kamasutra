import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <li className={style.link}>
        <Link  to="/profile">Profile</Link>
      </li>
      <li className={style.link}>
        <Link  to="/dialogs">Dialogs</Link>
      </li>
      <li className={style.link}>
        <Link  to="/news">News</Link>
      </li>
      <li className={style.link}>
        <Link  to="/music">Music</Link>
      </li>
      <li className={style.link}>
        <Link  to="/settings">Settings</Link>
      </li>
    </nav>
  );
};

export default NavBar;
