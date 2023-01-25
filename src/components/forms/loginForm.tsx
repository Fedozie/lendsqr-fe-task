import React from 'react';

import Button from '../UI/button';

import styles from './styles/loginForm.module.scss';

const LoginForm = () => {
  return (
    <section className={styles.container}>
      <div className = {styles.description}>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </div>
      <form className={styles.form}>
        <div>
          <input
            className={`${styles["form-input"]}`}
            type="text" 
            id="email" 
            placeholder='Email'/>
        </div>
        <div>
          <input
            className={`${styles["form-input"]}`}
            type="password" 
            id="password" 
            placeholder='Password'
          />
        </div>
        <a href="#">FORGOT PASSWORD?</a>
        <Button
          text = {"LOG IN"}
          width = {"70%"}
          height = {"4.5rem"}
          priBtn = {"priBtn"}
        />
      </form>
    </section>
  )
}

export default LoginForm;