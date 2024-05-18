import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
const Review = () => {
  const [showdescripton, setshowdescripton] = useState("");
  return (
    <>
      <div className="flex flex-col gap-y-10">
        <div className="flex items-center gap-x-7">
          <h1
            className="text-md cursor-pointer font-DMsans font-normal text-secondary_font_color"
            onClick={() => setshowdescripton("description")}
          >
            Description
          </h1>
          <h1
            className="text-md cursor-pointer font-DMsans font-bold text-main_font_color"
            onClick={() => setshowdescripton("")}
          >
            {"Reviews (1) "}
          </h1>
        </div>

        {showdescripton === "description" ? (
          <div>
            <div>
              <p className="text-md font-DMsans font-normal text-secondary_font_color">
                1 review for Product
              </p>
              <hr className="mt-4 opacity-75" />
            </div>

            <div className="">
              <div className="flex items-center justify-between gap-x-3">
                <div className="flex items-center gap-x-3">
                  <h1 className="text-md font-DMsans font-bold text-main_font_color">
                    John Ford
                  </h1>
                  <div className="flex items-center gap-x-1 text-yellow-400">
                    <span>
                      <IoMdStar />
                    </span>

                    <span>
                      <IoMdStar />
                    </span>

                    <span>
                      <IoMdStar />
                    </span>

                    <span>
                      <IoMdStar />
                    </span>
                    <span>
                      <IoMdStar />
                    </span>
                  </div>
                </div>

                <p className="text-md font-DMsans font-normal text-secondary_font_color">
                  6 months ago
                </p>
              </div>
              <div className="mt-5">
                <p className="text-md font-DMsans font-normal text-secondary_font_color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
              <hr className="mt-6 opacity-75" />
            </div>
          </div>
        ) : (
          <div>
            <ul class="flex max-w-md flex-col gap-y-4 divide-y divide-gray-200">
              {[...new Array(6)].map((_, index) => (
                <li class="py-3 sm:pb-4">
                  <div class="flex items-center space-x-4 rtl:space-x-reverse">
                    <div class="flex-shrink-0">
                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
                        alt="Neil image"
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="truncate text-sm font-medium text-gray-900 ">
                        Neil Sims
                      </p>
                      <p class="truncate text-sm text-gray-500 ">
                        email@flowbite.com
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* post review */}
      <div>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <h1 className="mb-4 font-DMsans text-xl font-bold text-main_font_color">
            Add a Review
          </h1>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-md mb-4 font-DMsans font-bold text-main_font_color"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name here"
                className="w-1/2 border-b-2 border-b-gray-300 py-4"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-md mb-4 font-DMsans font-bold text-main_font_color"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email here"
                className="w-1/2 border-b-2 border-b-gray-300 py-4"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="review"
                className="text-md mb-4 font-DMsans font-bold text-main_font_color"
              >
                Review
              </label>
              <textarea
                className="w-1/2 border-b-2 border-b-gray-300 py-4"
                id="review"
                name="review"
                placeholder="Your review here"
              />
            </div>

            <button className="w-[16%] rounded-sm bg-black px-14 py-5 font-DMsans font-semibold text-white ">
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Review;
