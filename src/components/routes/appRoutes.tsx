import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/loginPage";
import DashboardLayout from "../pages/dashboardLayout";
import UsersPage from "../pages/usersPage";



const AppRoutes = () => {
    return (  
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element = {<LoginPage/>}/>
                <Route path = "/dashboard" element = {<DashboardLayout/>}>
                    <Route index element = {<UsersPage/>}/>
                </Route>
            </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default AppRoutes;