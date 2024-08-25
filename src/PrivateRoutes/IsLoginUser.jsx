import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";

const IsLoginUser = () => {
  return JSON.parse(localStorage.getItem("isverified")) ? (
    <Outlet />
  ) : (
    <Login />
  );
};

export default IsLoginUser;
