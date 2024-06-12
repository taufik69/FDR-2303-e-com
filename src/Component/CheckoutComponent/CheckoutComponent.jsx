import React, { useState } from "react";
import BreadCrumb from "../CommonConponent/BreadCrumb/BreadCrumb";

const CheckoutComponent = () => {
  const [billingDetails, setbillingDetails] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  });

  const [billingDetailsError, setbillingDetailsError] = useState({
    firstNameError: "",
    lastNameError: "",
    countryError: "",
    streetAddressError: "",
    cityError: "",
    postCodeError: "",
    phoneError: "",
    emailError: "",
  });

  const HandleField = (e) => {
    setbillingDetails({
      ...billingDetails,
      [e.target.id]: e.target.value,
    });
  };

  const HandleProcced = () => {
    const {
      firstName,
      lastName,
      country,
      streetAddress,
      city,
      postCode,
      phone,
      email,
    } = billingDetails;

    if (!firstName) {
      setbillingDetailsError({
        ...billingDetailsError,
        firstNameError: "Firstname required",
      });
    } else if (!lastName) {
      setbillingDetailsError({
        ...billingDetailsError,
        lastNameError: "Lastname required",
      });
    } else if (!country) {
      setbillingDetailsError({
        ...billingDetailsError,
        countryError: "Select country",
      });
    }
  };
  return (
    <div>
      <div className="py-28">
        <div className="container">
          <div>
            <h1 className="text-primaryFontColor pb-2 font-DMsans text-5xl font-bold">
              Checkout
            </h1>
            <BreadCrumb />
          </div>

          <p className="text-secondaryFontColor pt-11 font-DMsans text-base font-normal">
            Have a coupon?{" "}
            <span className="text-primaryFontColor cursor-pointer">
              Click here to enter your code
            </span>
          </p>

          <div className="pt-14">
            <h4 className="text-primaryFontColor pb-9 font-DMsans text-[39px] font-bold">
              Billing Details
            </h4>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center gap-x-9">
                <div className="flex w-full flex-col">
                  <span className="text-primaryFontColor pb-2 font-DMsans text-base font-bold">
                    First Name *
                  </span>
                  <input
                    type="text"
                    className="placeholder:text-secondaryFontColor border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                    placeholder="First Name"
                    onChange={HandleField}
                    id="firstName"
                  />
                </div>
                <div className="flex w-full flex-col">
                  <span className="text-primaryFontColor pb-2 font-DMsans text-base font-bold">
                    Last Name *
                  </span>
                  <input
                    type="text"
                    className="placeholder:text-secondaryFontColor border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                    placeholder="First Name"
                    onChange={HandleField}
                    id="lastName"
                  />
                </div>
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="text-primaryFontColor pb-2 font-DMsans text-base font-bold">
                  Companye Name (optional)
                </span>
                <input
                  type="text"
                  className="placeholder:text-secondaryFontColor border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Company Name"
                  onChange={HandleField}
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="text-primaryFontColor pb-2 font-DMsans text-base font-bold">
                  Country *
                </span>
                <select
                  name="country"
                  id="country"
                  className="border-0 border-b-2 pb-4"
                  onChange={HandleField}
                >
                  <option className="text-secondaryFontColor font-DMsans text-sm font-normal">
                    Please select
                  </option>
                  <option>India</option>
                  <option>Bangladesh</option>
                </select>
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="text-primaryFontColor pb-2 font-DMsans text-base font-bold">
                  Street Address *
                </span>
                <input
                  type="text"
                  className="placeholder:text-secondaryFontColor border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="House number and street name"
                  onChange={HandleField}
                  id="streetAddress"
                />
                <input
                  type="text"
                  className="placeholder:text-secondaryFontColor border-0 border-b-2 pb-4 pl-2 pt-4 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Apartment, suite, unit etc. (optional)"
                  onChange={HandleField}
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="text-primaryFontColor pb-2 font-DMsans text-base font-bold">
                  Town/City *
                </span>
                <input
                  type="text"
                  className="placeholder:text-secondaryFontColor border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Town/City"
                  onChange={HandleField}
                  id="city"
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="text-primaryFontColor pb-2 font-DMsans text-base font-bold">
                  County (optional)
                </span>
                <input
                  type="text"
                  className="placeholder:text-secondaryFontColor border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="County"
                  onChange={HandleField}
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="text-primaryFontColor pb-2 font-DMsans text-base font-bold">
                  Post Code *
                </span>
                <input
                  type="text"
                  className="placeholder:text-secondaryFontColor border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Post Code"
                  onChange={HandleField}
                  id="postCode"
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="text-primaryFontColor pb-2 font-DMsans text-base font-bold">
                  Phone *
                </span>
                <input
                  type="text"
                  className="placeholder:text-secondaryFontColor border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Phone"
                  onChange={HandleField}
                  id="phone"
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="text-primaryFontColor pb-2 font-DMsans text-base font-bold">
                  Email Address *
                </span>
                <input
                  type="email"
                  className="placeholder:text-secondaryFontColor border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Email"
                  onChange={HandleField}
                  id="email"
                />
              </div>
            </form>
          </div>
          <button
            onClick={HandleProcced}
            className="mt-8 bg-main_font_color px-6 py-2 text-lg text-white"
          >
            Procced
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
