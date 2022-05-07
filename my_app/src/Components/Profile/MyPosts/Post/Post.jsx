import React from "react";
import styles from "./Post.module.css";

import src from "../../../../assets/img/images.jpeg";

const Post = ({message, like}) => {
  return (
    <div className={styles.item}>
      <img src={src} alt="avatar" className={styles.img} />
      {message}
      <div>
        <span>{like}</span>
      </div>
    </div>
  );
};

export default Post;
