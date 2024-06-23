import React, { useState } from "react";
import RegistrationTop from "../../Component/RegistrationComponent/RegistraitonTop/RegistrationTop";
import SignUpInput from "../../Component/RegistrationComponent/SignUpInput/SignUpInput";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/FirebaseConfig.js";
import { Link, useNavigate } from "react-router-dom";
import { SucessMessage, ErrorMessage } from "../../../utils/Utils.js";

const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
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

  const [userInfoError, setuserInfoError] = useState({
    FirstNameError: "",
    EmailError: "",
    TelephoneError: "",
    Address1Error: "",
    DistrictError: "",
    PasswordError: "",
    RepeatPasswordError: "",
    agreementError: false,
    passwordNotMatch: "",
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
      District,
    } = userInfo;

    if (!FirstName) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "First Name missing",
      });
    } else if (!Email) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "Email missing",
      });
    } else if (!Telephone) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "Telephone missing ",
      });
    } else if (!Address1) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "Address1   missing ",
      });
    } else if (!District) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        DistrictError: "District  missing",
      });
    } else if (!Password) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        DistrictError: "",
        PasswordError: "password missing ",
      });
    } else if (!RepeatPassword) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        PasswordError: "",
        RepeatPasswordError: "Repeat password missing ",
      });
    } else if (Password !== RepeatPassword) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        PasswordError: "",
        RepeatPasswordError: "",
        passwordNotMatch: "Password not matched",
      });
    } else if (agreement == false) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        PasswordError: "",
        RepeatPasswordError: "",
        passwordNotMatch: "",
        passwordNotMatch: "",
        agreementError: "agreement password Name missing",
      });
    } else {
      // create user with firebase createUserWithEmailAndPassword
      setloading(true);
      createUserWithEmailAndPassword(auth, userInfo.Email, userInfo.Password)
        .then((usercredential) => {
          SucessMessage(`${userInfo.FirstName} Registration Done`);
        })
        .then(() => {
          console.log("hello");
          addDoc(collection(db, "users"), userInfo)
            .then((userCrend) => {
              sendEmailVerification(auth.currentUser).then(() => {
                SucessMessage(`${userInfo.FirstName} Check Your Email Inbox`);
              });
            })
            .then(() => {
              setTimeout(() => {
                navigate("/login");
              }, 3000);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          ErrorMessage(`${err.code}`, "top-center");
        })
        .finally(() => {
          setloading(false);
          setuserInfo({
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
          setuserInfoError({
            ...userInfoError,
            FirstNameError: "",
            EmailError: "",
            TelephoneError: "",
            Address1Error: "",
            PasswordError: "",
            RepeatPasswordError: "",
            passwordNotMatch: "",
            passwordNotMatch: "",
            agreementError: "",
          });
        });
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
                  <div className="basis-2/5">
                    <SignUpInput
                      className={`${userInfoError.FirstNameError ? "border-0 border-b-2 border-b-red-500 py-4 " : "border-0 border-b-2 border-b-secondary_bg_color py-4 "}`}
                      inputType={"text"}
                      placeHolder={"First Name"}
                      labelTitle={"First Name"}
                      inputId={"FirstName"}
                      oninputChange={handleUserInput}
                      valueFrom={userInfo.FirstName}
                    />
                    {userInfoError.FirstNameError && (
                      <p className="text-red-500">
                        {userInfoError.FirstNameError}{" "}
                      </p>
                    )}
                  </div>
                  <div className="basis-2/5">
                    <SignUpInput
                      className={
                        "border-0 border-b-2 border-b-secondary_bg_color py-4 "
                      }
                      inputType={"text"}
                      placeHolder={"Last Name"}
                      labelTitle={"Last Name"}
                      inputId={"LastName"}
                      oninputChange={handleUserInput}
                      valueFrom={userInfo.LastName}
                    />
                  </div>

                  <div className="basis-2/5">
                    <SignUpInput
                      className={`${userInfoError.EmailError ? "border-0 border-b-2 border-b-red-500 py-4 " : "border-0 border-b-2 border-b-secondary_bg_color py-4 "}`}
                      inputType={"email"}
                      placeHolder={"First Name"}
                      labelTitle={"Email address"}
                      inputId={"Email"}
                      oninputChange={handleUserInput}
                      valueFrom={userInfo.Email}
                    />
                    {userInfoError.EmailError && (
                      <p className="text-red-500">
                        {userInfoError.EmailError}{" "}
                      </p>
                    )}
                  </div>

                  <div>
                    <SignUpInput
                      className={`${userInfoError.TelephoneError ? "border-0 border-b-2 border-b-red-500 py-4 " : "border-0 border-b-2 border-b-secondary_bg_color py-4 "}`}
                      inputType={"number"}
                      placeHolder={"Your Telephone number"}
                      labelTitle={"Telephone"}
                      inputId={"Telephone"}
                      oninputChange={handleUserInput}
                      valueFrom={userInfo.Telephone}
                    />
                    {userInfoError.TelephoneError && (
                      <p className="text-red-500">
                        {userInfoError.TelephoneError}{" "}
                      </p>
                    )}
                  </div>
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
                  <div className="basis-2/5">
                    <SignUpInput
                      className={`${userInfoError.Address1Error ? "border-0 border-b-2 border-b-red-500 py-4 " : "border-0 border-b-2 border-b-secondary_bg_color py-4 "}`}
                      inputType={"text"}
                      placeHolder={"4279 Zboncak Port Suite 6212"}
                      labelTitle={"Address 1"}
                      inputId={"Address1"}
                      oninputChange={handleUserInput}
                      valueFrom={userInfo.Address1}
                    />
                    {userInfoError.Address1Error && (
                      <p className="text-red-500">
                        {userInfoError.Address1Error}{" "}
                      </p>
                    )}
                  </div>
                  <SignUpInput
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4"
                    }
                    inputType={"text"}
                    placeHolder={"Address 2"}
                    labelTitle={"Address 2"}
                    inputId={"Address2"}
                    oninputChange={handleUserInput}
                    valueFrom={userInfo.Address2}
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
                    valueFrom={userInfo.City}
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
                    valueFrom={userInfo.PostCode}
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
                      value={userInfo.Division}
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
                      className={`${userInfoError.DistrictError ? "w-full border-0 border-b-2 border-b-red-500" : "w-full border-0 border-b-2 border-b-secondary_bg_color "}`}
                      onChange={handleUserInput}
                      value={userInfo.District}
                    >
                      <option value=""> Please select</option>
                      <option value="Dhaka"> Dhaka</option>
                      <option value="Mymensing"> Mymensing</option>
                      <option value="Joypurhat"> Joypurhat</option>
                      <option value="Bogura"> Bogura</option>
                      <option value="Bogura"> Bogura</option>
                    </select>
                    {userInfoError.DistrictError && (
                      <p className="text-red-500">
                        {userInfoError.DistrictError}{" "}
                      </p>
                    )}
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
                  <div className="basis-2/5">
                    <SignUpInput
                      className={`${userInfoError.PasswordError ? "border-0 border-b-2 border-b-red-500 py-4 " : "border-0 border-b-2 border-b-secondary_bg_color py-4 "}`}
                      inputType={"Password"}
                      placeHolder={"****"}
                      labelTitle={"Password"}
                      inputId={"Password"}
                      oninputChange={handleUserInput}
                      valueFrom={userInfo.Password}
                    />
                    {userInfoError.PasswordError && (
                      <p className="text-red-500">
                        {userInfoError.PasswordError}{" "}
                      </p>
                    )}
                  </div>
                  <div className="basis-2/5">
                    <SignUpInput
                      className={`${userInfoError.RepeatPasswordError ? "border-0 border-b-2 border-b-red-500 py-4 " : "border-0 border-b-2 border-b-secondary_bg_color py-4 "}`}
                      inputType={"password"}
                      placeHolder={"Repeat password"}
                      labelTitle={"Repeat Password"}
                      inputId={"RepeatPassword"}
                      oninputChange={handleUserInput}
                      valueFrom={userInfo.RepeatPassword}
                    />
                    {userInfoError.RepeatPasswordError && (
                      <p className="text-red-500">
                        {userInfoError.RepeatPasswordError}{" "}
                      </p>
                    )}
                  </div>
                  {userInfoError.passwordNotMatch && (
                    <p className="text-red-500">
                      {userInfoError.passwordNotMatch}{" "}
                    </p>
                  )}
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
                valueFrom={userInfo.agreement}
              />
              <p
                className={
                  userInfoError.agreementError
                    ? "font-DMsans text-base font-normal text-red-500"
                    : "font-DMsans text-base font-normal text-secondary_font_color"
                }
              >
                {userInfoError.agreementError
                  ? userInfoError.agreementError
                  : "I have read and agree to the Privacy Policy"}
              </p>
            </div>
            <Link to={"/login"}>
              <p className="font-DMsans text-base font-normal text-secondary_font_color underline hover:text-blue-700">
                i have an already Account
              </p>
            </Link>
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
                valueFrom={userInfo.subcribe1}
              />
              <input
                type="checkbox"
                name="subcribe2"
                id="subcribe2"
                onChange={handleUserInput}
                valueFrom={userInfo.subcribe2}
              />
            </div>
            {/* Check mark  infomation */}
            {/* button  */}
            <div>
              {loading ? (
                <button className="text-md flex items-center gap-x-3 rounded-sm bg-black px-20 py-4 font-DMsans font-bold text-white">
                  <div className="h-[25px] w-[25px] animate-spin  rounded-full border-b-2 border-t-4 border-b-white border-t-white bg-gradient-to-r from-cyan-500  to-blue-500"></div>
                  Sign up
                </button>
              ) : (
                <button
                  className="text-md rounded-sm bg-black px-20 py-4 font-DMsans font-bold text-white"
                  onClick={HandleSignup}
                >
                  Sign up
                </button>
              )}
            </div>
            {/* button  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
