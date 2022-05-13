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

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        <DialogItem id={dialogData[0].id} name={dialogData[0].name} />
        <DialogItem id={dialogData[1].id} name={dialogData[1].name} />
        <DialogItem id={dialogData[2].id} name={dialogData[2].name} />
        <DialogItem id={dialogData[3].id} name={dialogData[3].name} />
        <DialogItem id={dialogData[4].id} name={dialogData[4].name} />
      </div>
      <div className={style.massages}>
        <Message id={messageData[1].id} message={messageData[0].message} />
        <Message id={messageData[2].id} message={messageData[1].message} />
        <Message id={messageData[3].id} message={messageData[2].message} />
        <Message id={messageData[4].id} message={messageData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
