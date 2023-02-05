import React from "react";
import {Link} from "react-router-dom";
import uuid from "react-uuid";



import styles from  "./styles/navbar.module.scss";
import switchOrg from "../assets/icons/switchOrg.png";
import dashboard from "../assets/icons/dashboard.png";
import {data} from "../data/navbarData";

const Navbar = () => {

    return (
      <nav className={styles.navbar}>
        <div className={`${styles["navbar-org"]}`}>
          <img src={switchOrg} alt="Switch Organization Icon" />
          <p>Switch Organization</p>
        </div>
        <div className={`${styles["navbar-dashboard"]}`}>
          <img src={dashboard} alt="Dashboard Icon" />
          <p>Dashboard</p>
        </div>
        <div className={`${styles["navbar-customers"]}`}>
          <p>CUSTOMERS</p>
          <ul>
            {data[0].map((customer) => (
              <li key={uuid()} className={styles.tabs}>
                <img src={customer.icon} alt="Customers Icon" />
                <a>{customer.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles["navbar-businesses"]}`}>
          <p>BUSINESSES</p>
          <ul>
            {data[1].map((business) => (
              <li key={uuid()} className={styles.tabs}>
                <img src={business.icon} alt="Businesses Icon" />
                <a>{business.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles["navbar-settings"]}`}>
          <p>SETTINGS</p>
          <ul>
            {data[2].map((setting) => (
              <li key={uuid()} className={styles.tabs}>
                <img src={setting.icon} alt="Settings Icon" />
                <a>{setting.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
}
 
export default Navbar;