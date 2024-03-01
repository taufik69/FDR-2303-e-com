import React from "react";
import Header from "../../Component/HomeComponent/Header/Header";
import MenuBar from "../../Component/HomeComponent/MenuBar/MenuBar";
import Banner from "../../Component/HomeComponent/Banner/Banner";
import Shipping from "../../Component/HomeComponent/Shipping/Shipping";
import SaleInfo from "../../Component/HomeComponent/SaleInfo/SaleInfo";
import NewArival from "../../Component/HomeComponent/NewArrival/NewArival";
import PhoneOfTheYear from "../../Component/HomeComponent/PhoneOfTheYear/PhoneOfTheYear";
import Fotter from "../../Component/CommonConponent/Fotter/Fotter";
import { ProductData, BestSellingProduct, SpeacialOffer } from "/Data/Data.js";

const Home = () => {
  return (
    <div>
      <Header />
      <MenuBar />
      <Banner />
      <Shipping />
      <SaleInfo />
      <NewArival headingTitle="New Arrival" pdata={ProductData} />
      <NewArival headingTitle="Our Best Selling" pdata={BestSellingProduct} />
      <PhoneOfTheYear />
      <NewArival headingTitle="Special Offers" pdata={SpeacialOffer} />
      <Fotter />
    </div>
  );
};

export default Home;
