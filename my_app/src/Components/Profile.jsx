import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.content}>
      <img
        src="https://assets.kpmg/is/image/kpmg/space-milky-way:cq5dam.web.1400.350"
        alt="img"
      />
      <div> ava + descr</div>
      <div>
        my post
        <div>new post</div>
        <div className={styles.posts}>
          <div className={styles.item}>post 1</div>
          <div className={styles.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
