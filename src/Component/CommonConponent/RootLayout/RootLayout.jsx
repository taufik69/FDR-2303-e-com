import React from "react";
import Header from "../../HomeComponent/Header/Header";
import MenuBar from "../../HomeComponent/MenuBar/MenuBar";
import Fotter from "../Fotter/Fotter";
import { Outlet } from "react-router";
const RootLayout = () => {
  return (
    <div>
      <Header />
      <MenuBar />
      <Outlet />
      <Fotter />
    </div>
  );
};

export default RootLayout;
