import React from "react";
import FotterItem from "../FotterItem";
import Flex from "../Flex";
import Fotterlogo from "../../../assets/Logo.png";
const FooterTop = () => {
  return (
    <Flex
      className={
        "flex flex-wrap lg:flex-nowrap justify-around sm:justify-between sm:px-5 xl:px-0 lg:items-start lg:px-5 gap-y-10  lg:gap-y-0  items-start sm:items-center"
      }
    >
      <FotterItem
        title={"Menu"}
        allitem={["Home", "Shop ", "About", "Contact", "Journal"]}
      />

      <FotterItem
        title={"SHOP"}
        allitem={["Category ", "Category ", "Category", "Category", "Category"]}
      />

      <FotterItem
        title={"HELP"}
        allitem={[
          "Privacy Policy ",
          "Terms & Conditions ",
          "Special E-shop",
          "Shipping",
          "Secure Payments",
        ]}
      />

      <div>
        <div className="text-main_font_color font-DMsans font-bold text-md mb-2">
          <a href="#">(052) 611-5711</a>
        </div>
        <div className="text-main_font_color font-DMsans font-bold text-md">
          <a href="#">company@domain.com</a>
        </div>
        <address className="text-footer_text_color font-DMsans text-sm  mt-5">
          575 Crescent Ave. Quakertown, PA 18951
        </address>
      </div>

      <div className="cursor-pointer">
        <img src={Fotterlogo} alt={Fotterlogo} />
      </div>
    </Flex>
  );
};

export default FooterTop;
