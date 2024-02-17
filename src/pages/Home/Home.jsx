import React from "react";
import Header from "../../Component/Header/Header";
import MenuBar from "../../Component/MenuBar/MenuBar";
import Banner from "../../Component/Banner/Banner";
import Shipping from "../../Component/Shipping/Shipping";
import SaleInfo from "../../Component/SaleInfo/SaleInfo";
const Home = () => {
  return (
    <div>
      <Header />
      <MenuBar />
      <Banner />
      <Shipping />
      <SaleInfo />
    </div>
  );
};

export default Home;
