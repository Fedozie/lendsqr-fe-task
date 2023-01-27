import React from "react";

import Logo from "../UI/logo";

import loginIllustration from "../assets/illustrations/login-illustration.png";
import styles from "./styles/wallpaper.module.scss";

const Wallpaper = () => {
  return (
    <section className={styles.container}>
      <div>
        <Logo />
      </div>
      <div className={`${styles["img-container"]}`}>
        <img src={loginIllustration} alt="Log in Illustration" />
      </div>
    </section>
  );
};

export default Wallpaper;
