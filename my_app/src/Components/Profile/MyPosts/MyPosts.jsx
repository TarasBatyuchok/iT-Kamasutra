import React from "react";
import styles from "./MyPosts.module.css";


import Post from "./Post/Post.jsx";

const MyPosts = () => {

  let postData = [
    {id:1, message: 'Hello friend', likesCount: '45'},
    {id:2, message: "Hello i'm props", likesCount: '5'},
  ]

  let postElement = postData.map( item => <Post message={item.message} like={item.likesCount}/>)

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
          {postElement}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
