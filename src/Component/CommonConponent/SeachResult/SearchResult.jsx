import React from "react";

const SearchResult = ({ className, searchResult, onToProduct }) => {
  return (
    <div className={className}>
      {searchResult?.map((product) => (
        <div
          onClick={() => onToProduct(product.id)}
          className="cursor-pointer border-b-2 border-b-gray-300 py-5 hover:bg-gray-400"
          key={product.id}
        >
          <span>{product.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
