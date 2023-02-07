import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/loginPage";
import DashboardLayout from "../pages/dashboardLayout";
import UsersPage from "../pages/usersPage";
import GuarantorsPage from "../pages/guarantorsPage";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<UsersPage />} />
            <Route path="guarantors" element={<GuarantorsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
