import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const NavBar = ({ state }) => {
  let LinkItem = state.linkData.map((item) => {
    return (
      <li className={style.link}>
        <Link to={item.route}>{item.title}</Link>
      </li>
    );
  });
  let Friend = state.friendData.map((item) => {
    return (
      <div className={style.friend}>
        <div className={style.avatar}>
          <img src={item.src} alt="img" />
        </div>
        <div className={style.name}>{item.name}</div>
      </div>
    );
  });

  return (
    <div className={style.nav}>
      <nav>{LinkItem}</nav>
      <div className={style.friendSection}>
        <h4 className={style.title}>Your friends</h4>
        <div className={style.containerItem}>
          {Friend}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
