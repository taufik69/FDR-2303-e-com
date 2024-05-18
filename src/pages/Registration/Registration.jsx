import React, { useState } from "react";
import RegistrationTop from "../../Component/RegistrationComponent/RegistraitonTop/RegistrationTop";
import SignUpInput from "../../Component/RegistrationComponent/SignUpInput/SignUpInput";

const Registration = () => {
  const [userInfo, setuserInfo] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Telephone: "",
    Address1: "",
    Address2: "",
    City: "",
    PostCode: "",
    Division: "",
    District: "",
    Password: "",
    RepeatPassword: "",
  });
  // handleUserInput function implementation
  const handleUserInput = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <div className="py-20">
        <div className="container">
          <RegistrationTop />

          {/* personal infomation */}
          <div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-10">
                <h1 className=" text-[49px] font-bold text-main_font_color">
                  Your Personal Details
                </h1>
              </div>
              <div className="flex flex-wrap gap-x-20 gap-y-8">
                <SignUpInput
                  className={"border-b-2 border-b-secondary_bg_color py-4 "}
                  inputType={"text"}
                  placeHolder={"First Name"}
                  labelTitle={"First Name"}
                  inputId={"FirstName"}
                  oninputChange={handleUserInput}
                />
                <SignUpInput
                  className={"border-b-2 border-b-secondary_bg_color py-4 "}
                  inputType={"text"}
                  placeHolder={"Last Name"}
                  labelTitle={"Last Name"}
                  inputId={"LastName"}
                  oninputChange={handleUserInput}
                />

                <SignUpInput
                  className={"border-b-2 border-b-secondary_bg_color py-4 "}
                  inputType={"email"}
                  placeHolder={"First Name"}
                  labelTitle={"Email address"}
                  inputId={"Email"}
                  oninputChange={handleUserInput}
                />

                <SignUpInput
                  className={"border-b-2 border-b-secondary_bg_color py-4 "}
                  inputType={"number"}
                  placeHolder={"Your Telephone number"}
                  labelTitle={"Telephone"}
                  inputId={"Telephone"}
                  oninputChange={handleUserInput}
                />
              </div>
            </form>
          </div>
          {/* personal infomation */}
          {/* customer infomation */}
          <div className="mt-12">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-10">
                <h1 className="text-[49px] font-bold text-main_font_color">
                  New Customer
                </h1>
              </div>
              <div className="flex flex-wrap gap-x-20 gap-y-8">
                <SignUpInput
                  className={"border-b-2 border-b-secondary_bg_color py-4 "}
                  inputType={"text"}
                  placeHolder={"4279 Zboncak Port Suite 6212"}
                  labelTitle={"Address 1"}
                  inputId={"Address1"}
                  oninputChange={handleUserInput}
                />
                <SignUpInput
                  className={"border-b-2 border-b-secondary_bg_color py-4 "}
                  inputType={"text"}
                  placeHolder={"Address 2"}
                  labelTitle={"Address 2"}
                  inputId={"Address2"}
                  oninputChange={handleUserInput}
                />

                <SignUpInput
                  className={"border-b-2 border-b-secondary_bg_color py-4 "}
                  inputType={"text"}
                  placeHolder={"Your city"}
                  labelTitle={"City"}
                  inputId={"City"}
                  oninputChange={handleUserInput}
                />

                <SignUpInput
                  className={"border-b-2 border-b-secondary_bg_color py-4 "}
                  inputType={"number"}
                  placeHolder={"05228"}
                  labelTitle={"Post Code"}
                  inputId={"PostCode"}
                  oninputChange={handleUserInput}
                />
              </div>

              <div className=" flex gap-x-20">
                <div className=" basis-2/5 ">
                  <h2 className="border-b-2 border-b-secondary_bg_color py-4 ">
                    Divison
                  </h2>
                  <select
                    name="Divison"
                    id="Division"
                    className="w-full"
                    onChange={handleUserInput}
                  >
                    <option value=""> Please select</option>
                    <option value="Dhaka"> Dhaka</option>
                    <option value="Mymensing"> Mymensing</option>
                    <option value="Joypurhat"> Joypurhat</option>
                    <option value="Bogura"> Bogura</option>
                    <option value="Bogura"> Bogura</option>
                  </select>
                </div>

                <div className=" basis-2/5">
                  <h1 className="border-b-2 border-b-secondary_bg_color py-4 ">
                    District
                  </h1>
                  <select
                    name="District"
                    id="District"
                    className="w-full"
                    onChange={handleUserInput}
                  >
                    <option value=""> Please select</option>
                    <option value="Dhaka"> Dhaka</option>
                    <option value="Mymensing"> Mymensing</option>
                    <option value="Joypurhat"> Joypurhat</option>
                    <option value="Bogura"> Bogura</option>
                    <option value="Bogura"> Bogura</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          {/* customer infomation */}
          {/* customer infomation */}
          <div className="mt-20">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-10">
                <h1 className=" text-[49px] font-bold text-main_font_color">
                  Your Password
                </h1>
              </div>
              <div className="flex  flex-wrap  gap-x-20 gap-y-8">
                <SignUpInput
                  className={"border-b-2 border-b-secondary_bg_color py-4 "}
                  inputType={"Password"}
                  placeHolder={"****"}
                  labelTitle={"Password"}
                  inputId={"Password"}
                  oninputChange={handleUserInput}
                />
                <SignUpInput
                  className={"border-b-2 border-b-secondary_bg_color py-4 "}
                  inputType={"password"}
                  placeHolder={"Repeat password"}
                  labelTitle={"Repeat Password"}
                  inputId={"RepeatPassword"}
                  oninputChange={handleUserInput}
                />
              </div>
            </form>
          </div>
          {/* customer infomation */}
        </div>
      </div>
    </>
  );
};

export default Registration;
