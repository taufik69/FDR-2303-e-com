import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const BreadCrumb = () => {
  const location = useLocation();
  let BreadCrumbpathName = location.pathname.split("/").filter((x) => x);
  let breadCrumList = "";

  return (
    <div>
      <ul className="flex items-center  gap-4">
        <li>
          <Link
            to={"/"}
            className="bg-green-400 px-5 py-1 rounded-md text-black hover:bg-green-300"
          >
            Home
          </Link>
        </li>
        <MdKeyboardDoubleArrowRight />
        {BreadCrumbpathName.map((path, index) => {
          const isLast = index === BreadCrumbpathName.length - 1;
          breadCrumList += path;
          console.log(breadCrumList);
          return (
            <li key={path}>
              {isLast ? (
                <Link
                  className={`${
                    isLast
                      ? "bg-blue-300 px-5 py-1 rounded-md text-black hover:bg-green-300"
                      : null
                  }`}
                >
                  {" "}
                  {path}
                </Link>
              ) : (
                <Link
                  to={`/${breadCrumList}`}
                  className={`${
                    isLast
                      ? "bg-blue-300 px-5 py-1 rounded-md text-black hover:bg-green-300"
                      : null
                  }`}
                >
                  {path}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumb;
