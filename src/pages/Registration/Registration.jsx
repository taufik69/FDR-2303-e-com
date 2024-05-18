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
    agreement: false,
    subcribe1: false,
    subcribe2: false,
  });
  // handleUserInput function implementation
  const handleUserInput = (e) => {
    if (e.target.checked) {
      setuserInfo({
        ...userInfo,
        [e.target.id]: true,
      });
    } else {
      setuserInfo({
        ...userInfo,
        [e.target.id]: e.target.value,
      });
    }
  };

  console.log(userInfo);

  // HandleSignup button funtionality
  const HandleSignup = () => {
    const {
      FirstName,
      Email,
      Telephone,
      Address1,
      Password,
      RepeatPassword,
      agreement,
    } = userInfo;
    if (!FirstName) {
      console.log("first Name missing");
    } else if (!Email) {
      console.log("Email Name missing");
    } else if (!Telephone) {
      console.log("Telephone Name missing");
    } else if (!Address1) {
      console.log("Adress Name missing");
    } else if (!Password) {
      console.log("password Name missing");
    } else if (!RepeatPassword) {
      console.log("confrim password Name missing");
    } else if (!agreement) {
      console.log("agreement password Name missing");
    } else {
      console.log("Everything is ok no error occured");
    }
  };
  return (
    <>
      <div className="py-20">
        <div className="container">
          <RegistrationTop />
          <div className="flex flex-col items-start gap-y-12">
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
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4 "
                    }
                    inputType={"text"}
                    placeHolder={"First Name"}
                    labelTitle={"First Name"}
                    inputId={"FirstName"}
                    oninputChange={handleUserInput}
                  />
                  <SignUpInput
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4 "
                    }
                    inputType={"text"}
                    placeHolder={"Last Name"}
                    labelTitle={"Last Name"}
                    inputId={"LastName"}
                    oninputChange={handleUserInput}
                  />

                  <SignUpInput
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4"
                    }
                    inputType={"email"}
                    placeHolder={"First Name"}
                    labelTitle={"Email address"}
                    inputId={"Email"}
                    oninputChange={handleUserInput}
                  />

                  <SignUpInput
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4"
                    }
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
            <div>
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-10">
                  <h1 className="border-0 text-[49px] font-bold text-main_font_color">
                    New Customer
                  </h1>
                </div>
                <div className="flex flex-wrap gap-x-20 gap-y-8">
                  <SignUpInput
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4"
                    }
                    inputType={"text"}
                    placeHolder={"4279 Zboncak Port Suite 6212"}
                    labelTitle={"Address 1"}
                    inputId={"Address1"}
                    oninputChange={handleUserInput}
                  />
                  <SignUpInput
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4"
                    }
                    inputType={"text"}
                    placeHolder={"Address 2"}
                    labelTitle={"Address 2"}
                    inputId={"Address2"}
                    oninputChange={handleUserInput}
                  />

                  <SignUpInput
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4"
                    }
                    inputType={"text"}
                    placeHolder={"Your city"}
                    labelTitle={"City"}
                    inputId={"City"}
                    oninputChange={handleUserInput}
                  />

                  <SignUpInput
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4"
                    }
                    inputType={"number"}
                    placeHolder={"05228"}
                    labelTitle={"Post Code"}
                    inputId={"PostCode"}
                    oninputChange={handleUserInput}
                  />
                </div>

                <div className="mt-5 flex gap-x-20">
                  <div className=" basis-2/5 ">
                    <h2 className="mb-3 font-DMsans text-base font-normal text-main_font_color">
                      Divison
                    </h2>
                    <select
                      name="Divison"
                      id="Division"
                      className="w-full border-0 border-b-2 border-b-secondary_bg_color"
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
                    <h1 className="mb-3 font-DMsans text-base font-normal text-main_font_color ">
                      District
                    </h1>
                    <select
                      name="District"
                      id="District"
                      className="w-full border-0 border-b-2 border-b-secondary_bg_color "
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
            <div>
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-10">
                  <h1 className=" text-[49px] font-bold text-main_font_color">
                    Your Password
                  </h1>
                </div>
                <div className="flex  flex-wrap  gap-x-20 gap-y-8">
                  <SignUpInput
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4"
                    }
                    inputType={"Password"}
                    placeHolder={"****"}
                    labelTitle={"Password"}
                    inputId={"Password"}
                    oninputChange={handleUserInput}
                  />
                  <SignUpInput
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4"
                    }
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
            {/* Check mark infomation */}
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                onChange={handleUserInput}
              />
              <p className="font-DMsans text-base font-normal text-secondary_font_color">
                I have read and agree to the Privacy Policy
              </p>
            </div>
            {/* Check mark  infomation */}
            {/* Check mark infomation */}
            <div className="flex items-center gap-x-3">
              <p className="font-DMsans text-base font-normal text-secondary_font_color">
                Subscribe Newsletter
              </p>
              <input
                type="checkbox"
                name="subcribe1"
                id="subcribe1"
                onChange={handleUserInput}
              />
              <input
                type="checkbox"
                name="subcribe2"
                id="subcribe2"
                onChange={handleUserInput}
              />
            </div>
            {/* Check mark  infomation */}
            {/* button  */}
            <div>
              <button
                className="text-md rounded-sm bg-black px-20 py-4 font-DMsans font-bold text-white"
                onClick={HandleSignup}
              >
                Sign up
              </button>
            </div>
            {/* button  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
