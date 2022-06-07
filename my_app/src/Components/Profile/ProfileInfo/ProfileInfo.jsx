import React from "react";

import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={styles.img}
          src="https://assets.kpmg/is/image/kpmg/space-milky-way:cq5dam.web.1400.350"
          alt="img"
        />
      </div>
      <div className={styles.description}> ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
