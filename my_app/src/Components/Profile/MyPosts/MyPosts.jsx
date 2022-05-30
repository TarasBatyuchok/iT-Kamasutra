import React from "react";
import styles from "./MyPosts.module.css";


import Post from "./Post/Post.jsx";

const MyPosts = ({postData,addPost,newPostText,updateNewPostText}) => {

  let postElement = postData.map( item => <Post message={item.message} like={item.likesCount} />)

  let newPostelement = React.createRef();
// додаєм пост
  let addNewPost =()=>{
    let text = newPostelement.current.value;
    addPost(text)
    updateNewPostText("");

  }
// texteria
  let onPostChange =()=>{
    let text = newPostelement.current.value;
    updateNewPostText(text);
  }



  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.title}>My post</h3>
        <div className={styles.wrapperTexteria}>
          <textarea onChange={onPostChange} ref={newPostelement} value={newPostText}/>
          <button onClick={addNewPost} className={styles.btn}>Add post</button>
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
