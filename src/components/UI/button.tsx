import React from 'react';

import styles from "./styles/button.module.scss";

type BtnProps = {
  text: string,
  width: string,
  height: string,
  priBtn: string
}

const Button = ({text, width, height}: BtnProps) => {
  return (
    <button
      
      className={`${styles.button} ${styles.priBtn}`}
      style ={{width: `${width}`, height: `${height}`}}
    >
      {text}
    </button>
  )
}

export default Button;