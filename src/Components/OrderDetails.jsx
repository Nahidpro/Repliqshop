import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom';

function OrderDetails() {
  const location = useLocation();
  let order = location.state;
 
  return (
    <div className=" mx-auto bg-white gap-2 w-full md:w-8/12 lg:w-6/12 xl:6/12">
      <table className="table-auto w-full  px-3">
        <thead>
          <tr className="px-2 py-2 w-full text-white bg-slate-700">
            <th className="px-2 py-2">Order By</th>
            <th className="px-2 py-2">title</th>
            <th className="px-2 py-2">quantity</th>
            <th className="px-2 py-2">totalPrice</th>
            <th className="px-2 py-2">status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 py-2">{order.OrderBy}</td>
            <td>{order.title}</td>
            <td>{order.quantity}</td>
            <td>{order.totalPrice}</td>
            <td>{order.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetails;
