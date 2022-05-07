import React from "react";
import styles from "./MyPosts.module.css";


import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div>
      <div>
        My post
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div>new post</div>
        <div className={styles.posts}>
          <Post message="Hello friend" like="15"/>
          <Post message="Hello i'm props" like="30"/>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
