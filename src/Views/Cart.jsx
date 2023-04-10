import React, { useState } from "react";
import ProductDetailsView from "../Components/ProductDetailsView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartProductCard from "../Components/CartProductCard";
import useStore from "../hooks/useStore";

function Cart() {
const {Cartiopen,setcartOpen,Cart,getCartTotalPrice,order,setOrder}   = useStore()

  return(
<div className="fixed  inset-0 z-20 bg-black bg-opacity-50">
      <div className="fixed inset-y-0 right-0 max-w-xs flex text-white">
        <div className="w-80 bg-gray-800">
          <div className="flex justify-end">
            <button
              className="p-2 "
              onClick={() => {
                setcartOpen(false)
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="flex overflow-y-auto max-h-96 flex-col gap-1 text-white :hover:bg-white :hover:text-black">
            
             {Cart.length===0 ? <h1 className=" text-center text-red-500">Cart Is Empty</h1> : <div>
             {Cart.map(product => <div key={product.id} className=" "> <CartProductCard product={product}/> </div>) }
                </div>
              }
            
             
          

          </div>
          <div className="fixed flex   w-full px-2 py-2   flex-col bottom-6 z-100">
             <h1 sticky className="text-red-400 w-full  px-2 py-2">Total Price - {getCartTotalPrice}</h1>
             <div onClick={() => setOrder(Cart)} className=" px-2 py-2 w-full bg-teal-500 ">
              <p >Confirm Order</p>
             </div>
            
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cart;
