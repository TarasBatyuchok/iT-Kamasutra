import React from "react";
import styles from "./MyPosts.module.css";


import Post from "./Post/Post.jsx";

const MyPosts = () => {

  let postData = [
    {id:1, message: 'Hello friend', likesCount: '45'},
    {id:2, message: "Hello i'm props", likesCount: '5'},
  ]


  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.title}>My post</h3>
        <div className={styles.wrapperTexteria}>
          <textarea></textarea>
          <button className={styles.btn}>Add post</button>
        </div>
        <div>new post</div>
        <div className={styles.posts}>
          <Post message={postData[0].message} like={postData[0].likesCount}/>
          <Post message={postData[1].message} like={postData[1].likesCount}/>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
