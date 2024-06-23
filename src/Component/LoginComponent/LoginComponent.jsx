import React, { useState } from "react";
import login from "../../assets/login.gif";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, SucessMessage, checkEmail } from "../../../utils/Utils";
import { DNA } from "react-loader-spinner";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const LoginComponent = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [loginUser, setloginUser] = useState({
    email: "",
    password: "",
  });
  // handleloginUserInput
  const handleloginUserInput = (e) => {
    setloginUser({
      ...loginUser,
      [e.target.id]: e.target.value,
    });
  };

  /**
   *todo: HandleLogin funtion implement
   */
  const HandleLogin = () => {
    const { email, password } = loginUser;
    if (!email || !checkEmail(email)) {
      ErrorMessage("Your Credential is Not Valid", "top-center");
    } else if (!password) {
      ErrorMessage("Your password is Not Valid", "top-center");
    } else {
      setloading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          onAuthStateChanged(auth, (user) => {
            if (user.emailVerified) {
              navigate("/chekout");
            } else {
              ErrorMessage(
                `${user.email} Is Not Verified Please check Your Email`,
                "top-center",
              );
            }
          });
        })
        .catch((err) => {
          ErrorMessage(err.code, "top-center");
        })
        .finally(() => {
          setloading(false);
        });
    }
  };
  return (
    <div>
      {/* <!-- component --> */}
      <section className="flex items-center">
        <div className="hidden  w-full  md:w-1/2 lg:block xl:w-2/5">
          <img src={login} alt="" />
        </div>

        <div
          className="flex h-screen w-full items-center justify-center bg-white px-6  md:mx-auto md:w-1/2 md:max-w-md lg:max-w-full
        lg:px-16 xl:w-1/3 xl:px-12"
        >
          <div className="h-100 w-full">
            <h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">
              Log in to your account
            </h1>

            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  className="mt-2 w-full rounded-lg border bg-gray-200 px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                  onChange={handleloginUserInput}
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  minlength="6"
                  className="mt-2 w-full rounded-lg border bg-gray-200 px-4 py-3 focus:border-blue-500
                focus:bg-white focus:outline-none"
                  required
                  onChange={handleloginUserInput}
                />
              </div>

              <div className="mt-2 text-right">
                <Link
                  to="/forgot"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                onClick={HandleLogin}
                className="mt-6 block w-full rounded-lg bg-indigo-500 px-4 py-3 font-semibold
              text-white hover:bg-indigo-400 focus:bg-indigo-400"
              >
                {loading ? (
                  <span className="flex justify-center">
                    <DNA
                      visible={true}
                      height="30"
                      width="100"
                      ariaLabel="dna-loading"
                    />
                  </span>
                ) : (
                  "Log In"
                )}
              </button>
            </form>

            <hr className="my-6 w-full border-gray-300" />

            <button
              type="button"
              className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
            >
              <div className="flex items-center justify-center">
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>

            <p className="mt-8">
              Need an account?{" "}
              <Link
                to="/registration"
                className="font-semibold text-blue-500 hover:text-blue-700"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginComponent;
