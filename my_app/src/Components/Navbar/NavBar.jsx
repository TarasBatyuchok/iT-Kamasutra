import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <li>
        <Link className={style.link} to="/profile">Profile</Link>
      </li>
      <li>
        <Link className={style.link} to="/dialogs">Message</Link>
      </li>
      <li>
        <Link className={style.link} to="/news">News</Link>
      </li>
      <li>
        <Link className={style.link} to="/music">Music</Link>
      </li>
      <li>
        <Link className={style.link} to="/settings">Settings</Link>
      </li>
    </nav>
  );
};

export default NavBar;
