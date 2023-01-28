import {Link} from "react-router-dom";

import Logo from "./logo";
import SearchBar from "./searchBar";
import styles from "./styles/headbar.module.scss";
import notificationIcon from "../assets/icons/notifications.png";
import profileImg from "../assets/illustrations/userImg.png";

const Headbar = () => {
    return (
      <nav className={styles.navbar}>
        <Logo />
        <div className={`${styles["navbar-search"]}`}>
          <SearchBar />
        </div>
        <div className={`${styles["navbar-info"]}`}>
          <a>Docs</a>
          <div>
            <img src={notificationIcon} alt="Notification Icon" />
          </div>
          <div className={`${styles["navbar-info-profile"]}`}>
            <div>
              <img src={profileImg} alt="Profile Image" />
            </div>
            <p>Adedeji</p>
          </div>
        </div>
      </nav>
    );
}
 
export default Headbar;