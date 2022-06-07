import React from "react";
import styles from "./MyPosts.module.css";


import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

  let postElement = props.postData.map( item => <Post message={item.message} like={item.likesCount} />)

  let newPostlement = React.createRef();
// додаєм пост
  let addNewPost =()=>{
    let text = newPostlement.current.value;
    props.addPost(text)
    props.updateNewPostText("");
  }
// texteria
  let onPostChange =()=>{
    let text = newPostlement.current.value;
    props.updateNewPostText(text);
  }



  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.title}>My post</h3>
        <div className={styles.wrapperTexteria}>
          <textarea onChange={onPostChange} ref={newPostlement} value={props.newPostText}/>
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
