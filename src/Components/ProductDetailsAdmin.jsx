import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";



function ProductDetailsAdmin() {
  const location = useLocation();
  let product = location.state;
 
  return (
    // <div className='flex z-0 flex-col my-3  drop-shadow-md max-h-60 w-full sm:w-8/12 md:w-8/12 lg:8/12 xl:w-4/12  gap-3  px-10 py-10 bg-gray-100'>

    <div className=" mx-auto bg-white gap-2 w-full md:w-8/12 lg:w-6/12 xl:6/12">
      <table className="table-auto w-full  px-3">
        <thead>
          <tr className="px-2 py-2 w-full text-white bg-slate-700">
            <th className="px-2 py-2">title</th>
            <th className="px-2 py-2">price</th>
            <th className="px-2 py-2">stock</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 py-2">{product.title}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
           
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductDetailsAdmin;
