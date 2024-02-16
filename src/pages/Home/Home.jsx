import React from "react";
import Header from "../../Component/Header/Header";
import MenuBar from "../../Component/MenuBar/MenuBar";
import Banner from "../../Component/Banner/Banner";
import Shipping from "../../Component/Shipping/Shipping";
const Home = () => {
  return (
    <div>
      <Header />
      <MenuBar />
      <Banner />
      <Shipping />
    </div>
  );
};

export default Home;
