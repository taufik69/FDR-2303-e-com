import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
const BreadCrumb = () => {
  const location = useLocation();
  let BreadCrubmPath = location.pathname.split("/").filter((x) => x);
  console.log(BreadCrubmPath);
  return (
    <div className="py-5">
      <nav>
        <ul className="flex  items-center">
          <li>
            <Link to={"/"} className="px-4 py-2 hover:bg-blue-400 rounded-xl ">
              Home
            </Link>
          </li>
          {/* const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`; */}
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumb;
