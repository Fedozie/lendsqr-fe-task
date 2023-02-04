import React from "react";

import styles from "./styles/usersPage.module.scss";
import {data} from "../data/userInfoData";

const UsersPage = () => {
    return (
      <section className={`${styles["user-section"]}`}>
        <p className={styles.heading}>Users</p>
        <div className={`${styles["user-info"]}`}>
          {data.map((info) => (
            <div className={`${styles["user-info-pocket"]}`}>
              <img src={info.icon} alt="Icon for Users Info" />
              <p>{info.text}</p>
              <p>{info.figures}</p>
            </div>
          ))}
        </div>
      </section>
    );
}
 
export default UsersPage;