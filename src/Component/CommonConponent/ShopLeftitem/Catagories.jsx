import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Flex from "../Flex";
import { Link } from "react-router-dom";

const Categories = ({ categoriesItem }) => {
  // State to track the visibility of subcategories for each category
  const [showSubCategories, setShowSubCategories] = useState(
    categoriesItem.map(() => false),
  );

  // Function to handle the toggle of subcategory visibility for a specific category
  const handleSubCategoryToggle = (id) => {
    setShowSubCategories((prevState) =>
      prevState.map((value, index) => (id === index ? !value : false)),
    );
  };

  return (
    <div className="px-5 py-4">
      <h1>Shop by Category</h1>
      {categoriesItem?.map((item, index) => (
        <div key={index}>
          {item.subcatagories.length > 0 ? (
            <div onClick={() => handleSubCategoryToggle(index)}>
              <Flex className={"items-center justify-between"}>
                <h1>{item.title}</h1>
                <span>
                  <FaPlus />
                </span>
              </Flex>
              {showSubCategories[index] && (
                <ul>
                  {item.subcatagories?.map((subitem) => (
                    <li key={subitem.id}>
                      <Link> {subitem.title} </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <h1>{item.title}</h1>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;
