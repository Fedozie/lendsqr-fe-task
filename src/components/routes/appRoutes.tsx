import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/loginPage";


const AppRoutes = () => {
    return (  
        <>
            <BrowserRouter>
                <Route path="/" element = {<LoginPage/>}/>
            </BrowserRouter>
        </>
    );
}
 
export default AppRoutes;