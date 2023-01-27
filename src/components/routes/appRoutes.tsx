import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/loginPage";



const AppRoutes = () => {
    return (  
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element = {<LoginPage/>}/>
                
            </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default AppRoutes;