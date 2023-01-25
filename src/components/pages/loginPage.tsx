
import LoginForm from "../forms/loginForm";
import Wallpaper from "../UI/wallpaper";

import styles from './styles/loginPage.module.scss';

const LoginPage = () => {
  return (
    <section className={styles.container}>
      <div>
        <Wallpaper/>
      </div>
      <div>
        <LoginForm/>
      </div>
    </section>
  )
}

export default LoginPage;