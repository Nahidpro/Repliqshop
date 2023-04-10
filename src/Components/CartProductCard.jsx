import React from "react";
import CartButton from "./CartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useStore from "../hooks/useStore";

function CartProductCard({ product }) {
    const {removeFromCart} = useStore()
  const { image, title, price } = product;

  return (
    <div className="flex p-1 items-center my-1 mx-auto w-full  justify-between sm:w-full lg:w-full xl:w-full bg-white gap-1 rounded-sm shadow-lg overflow-hidden ">
      <img src={image} alt={title} className="  w-1/4  object-cover" />
      <div className="px-1 w-full flex flex-col items-center justify-between">
        <h1 className="text-xs font-medium text-gray-800">{title}</h1>

        <div className="w-full flex flex-col ">
          <div className="flex w-full justify-between items-center">
            <p className="text-sm font-medium text-gray-800 ">${price}</p>{" "}
            <button onClick={() => removeFromCart(product)} className="text-red-400">
              <FontAwesomeIcon className="text-red-600" icon={faTrash} />
            </button>{" "}
          </div>
          <div>
            <h2 className="text-black">{product.totalPrice}</h2>
          </div>
          <CartButton  product={product}/>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CartProductCard;
