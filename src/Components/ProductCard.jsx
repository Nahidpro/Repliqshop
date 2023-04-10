import React from "react";
import useStore from "../hooks/useStore";

const ProductCard = ({ product }) => {
  let {increaseCartQuantity,decreaseCartQuantity} =useStore()
  let { image, title,price } = product;

  return (
    <div className="flex flex-col items-center justify-between bg-white gap-2 rounded-sm shadow-lg overflow-hidden w-full">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="px-4 py-2 flex flex-col  justify-between">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <p className="text-lg font-medium text-gray-800 mt-2">${price}</p>
        <div>
          <button onClick={()=> increaseCartQuantity(product)} className=" bg-sky-600 text-white w-full rounded-sm px-4 py-2  mb-0 hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
