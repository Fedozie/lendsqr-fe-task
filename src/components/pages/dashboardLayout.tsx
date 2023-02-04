import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../UI/navbar";
import Headbar from "../UI/headbar";

import styles from './styles/dashboardLayout.module.scss';

const DashboardLayout = () => {
    return (
        <>
            <Headbar/>
            <div className={styles.main}>
                <Navbar/>
                <Outlet/>
            </div>
        </>
    );
}
 
export default DashboardLayout;