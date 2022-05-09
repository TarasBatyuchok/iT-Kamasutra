import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <img
      className={styles.img}
        src="https://assets.kpmg/is/image/kpmg/space-milky-way:cq5dam.web.1400.350"
        alt="img"
      />
      <div> ava + descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
