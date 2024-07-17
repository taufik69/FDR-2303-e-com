import React from "react";
import { db } from "../../../Firebase/FirebaseConfig.js";
import img from "../../assets/bestSellilng/b1.png";
import { getDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
const MyAcount = () => {
  useEffect(() => {
    async function x() {
      const docRef = doc(db, "users");
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      console.log("klhjj");
    }
    x();
  }, []);

  return (
    <div className="flex items-center justify-center py-14">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <img src={img} alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
          <h4 className="font-sans text-blue-gray-900 mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased">
            Natalie Paisley
          </h4>
          <p className="font-sans block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text text-base font-medium leading-relaxed text-transparent antialiased">
            CEO / Co-Founder
          </p>
        </div>
        <div className="flex justify-center gap-7 p-6 pt-2">
          <a
            href="#facebook"
            className="font-sans block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href="#twitter"
            className="from-light-blue-600 to-light-blue-400 font-sans block bg-gradient-to-tr bg-clip-text text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="#instagram"
            className="font-sans block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <div className="mx-auto mb-8 w-full px-4 pt-5 ">
          <div className="py-1 text-sm text-gray-700">
            Made with{" "}
            <a
              className="font-semibold text-gray-700"
              href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents"
              target="_blank"
            >
              Material Tailwind
            </a>{" "}
            by{" "}
            <a
              href="https://www.creative-tim.com?ref=tailwindcomponents"
              className="font-semibold text-gray-700"
              target="_blank"
            >
              {" "}
              Creative Tim
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAcount;
