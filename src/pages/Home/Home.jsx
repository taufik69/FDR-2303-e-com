import React from "react";

import Banner from "../../Component/HomeComponent/Banner/Banner";
import Shipping from "../../Component/HomeComponent/Shipping/Shipping";
import SaleInfo from "../../Component/HomeComponent/SaleInfo/SaleInfo";
import NewArival from "../../Component/HomeComponent/NewArrival/NewArival";
import PhoneOfTheYear from "../../Component/HomeComponent/PhoneOfTheYear/PhoneOfTheYear";

import { ProductData, BestSellingProduct, SpeacialOffer } from "/Data/Data.js";

const Home = () => {
  return (
    <div>
      <Banner />
      <Shipping />
      <SaleInfo />
      <NewArival headingTitle="New Arrival" pdata={ProductData} />
      <NewArival headingTitle="Our Best Selling" pdata={BestSellingProduct} />
      <PhoneOfTheYear />
      <NewArival headingTitle="Special Offers" pdata={SpeacialOffer} />
    </div>
  );
};

export default Home;
