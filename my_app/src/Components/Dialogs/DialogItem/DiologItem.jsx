import React from "react";
import style from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = ({ name, id }) => {
  const path = "/dialogs/" + id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};


export default DialogItem;