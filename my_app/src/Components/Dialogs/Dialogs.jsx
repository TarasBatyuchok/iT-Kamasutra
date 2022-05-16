import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, id }) => {
  const path = "/dialogs/" + id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

const Message = ({ message }) => {
  return <div className={style.message}>{message}</div>;
};

const Dialogs = () => {
  const messageData = [
    { id: 1, message: "hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "wtf" },
    { id: 4, message: "Props" },
    { id: 5, message: "hlop hlop hlop" },
  ];

  const dialogData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Sveta" },
    { id: 3, name: "Dimych" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Valera" },
  ];


  let dialogElement = dialogData.map( item => <DialogItem id={item.id} name={item.name} /> );
  let messageelement = messageData.map( item => <Message id={item.id} message={item.message} />)

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogElement}
      </div>
      <div className={style.massages}>
      {messageelement}
      </div>
    </div>
  );
};

export default Dialogs;
