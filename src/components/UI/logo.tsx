import React from 'react';

import lendsqrLogo from "../assets/logo/lendsqrLogo.png";
import styles from "./styles/logo.module.scss";

const Logo = () => {
  return (
    <div className={`${styles["logo-container"]}`}>
        <img src={lendsqrLogo} alt="Logo of Lendsqr" />
    </div>
  )
}

export default Logo;