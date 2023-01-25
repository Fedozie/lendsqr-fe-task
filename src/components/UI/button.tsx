import React from 'react';

import styles from "./styles/button.module.scss";

type BtnProps = {
  text: string;
  width: string;
  height: string;
  priBtn: string;
  handleClick: (params: any) => any;
}

const Button = ({text, width, height, handleClick}: BtnProps) => {
  return (
    <button
      
      className={`${styles.button} ${styles.priBtn}`}
      style ={{width: `${width}`, height: `${height}`}}
      onClick = {handleClick}
    >
      {text}
    </button>
  )
}

export default Button;