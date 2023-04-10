import React from 'react'
import CartButton from './CartButton'

function ProductDetailsView({ image, title, description, price }) {
  return ( 
    <div className="flex p-4 items-center mx-auto w-full  justify-between sm:w-3/4 lg:w-6/12 xl:4/12 bg-white gap-2 rounded-sm shadow-lg overflow-hidden ">
    <img src={image} alt={title} className="h-48 w-2/4  object-cover" />
    <div className="px-4 py-2 flex flex-col  justify-between">
     
      <h2 className="text-lg font-medium text-gray-800">{title}</h2>
      <p className="text-sm text-gray-400 backdrop-filter-none mt-1">
        {description}
      </p>
      <p className="text-lg font-medium text-gray-800 mt-2">${price}</p> 
     <CartButton/>
      <div>
        {/* <button className=" bg-sky-600 text-white w-full rounded-sm px-4 py-2  mb-0 hover:bg-blue-600">
          Add to Cart
        </button> */}
      </div>
    </div> 
    <div>
   
    </div>

  </div>
  )
}

export default ProductDetailsView