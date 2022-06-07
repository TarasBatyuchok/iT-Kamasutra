import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DiologItem";
import Message from "./Message/Message";





const Dialogs = ({state}) => {

  let dialogElement = state.dialogData.map( item => <DialogItem id={item.id} name={item.name} /> );
  let messageelement = state.messageData.map( item => <Message id={item.id} message={item.message} />)

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
