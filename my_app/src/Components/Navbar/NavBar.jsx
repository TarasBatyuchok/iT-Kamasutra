import React from "react";
import style from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <li>Profile</li>
      <li>Message</li>
      <li>News</li>
      <li>Music</li>
      <li>Settings</li>
    </nav>
  );
};

export default NavBar;
