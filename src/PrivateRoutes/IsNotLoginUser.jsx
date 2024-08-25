import React from "react";

import { Outlet, Navigate } from "react-router-dom";
const IsNotLoginUser = () => {
  return (
    <>
      {JSON.parse(localStorage.getItem("isverified")) ? (
        <Navigate to="/" />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default IsNotLoginUser;
