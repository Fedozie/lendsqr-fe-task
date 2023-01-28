import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../UI/navbar";
import Headbar from "../UI/headbar";

const DashboardLayout = () => {
    return (
        <>
            <Headbar/>
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        </>
    );
}
 
export default DashboardLayout;