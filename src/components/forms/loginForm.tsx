import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";

import Button from "../UI/button";
import styles from "./styles/loginForm.module.scss";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const loggedIn = () => {
    navigate("/dashboard");
    console.log("clicked");
  };

  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <input
            className={`${styles["form-input"]}`}
            type="text"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email Address is required",
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email Address is invalid",
              },
            })}
          />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>
        <div>
          <input
            className={`${styles["form-input"]}`}
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          <p className={styles.error}>{errors.password?.message}</p>
        </div>
        <a href="#">FORGOT PASSWORD?</a>
        <Button
          text={"LOG IN"}
          width={"70%"}
          height={"4.5rem"}
          priBtn={"priBtn"}
          handleClick={loggedIn}
        />
      </form>
    </section>
  );
};

export default LoginForm;
