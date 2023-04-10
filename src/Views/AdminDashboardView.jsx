import React from "react";
import ProductCardListView from "../Components/ProductCardListView";
import useStore from "../hooks/useStore";
import ProductListAdmin from "../Components/ProductListAdmin";
import UserList from "../Components/UserList";
import UserDetails from "../Components/UserDetails";
import { NavLink, Outlet } from "react-router-dom";

function AdminDashboardView() {
  const { store, userlist } = useStore();
  return (
    <div className="flex justufy-btween">
      <div className="bg-slate-500 list-none h-screen w-3/6 sm:w-4/12 md:w-3/12 lg:w-3/12 xl:w-2/12  px-4 py-4">
        <div>
          <div className="px-2 py-2 w-full text-white  hover:bg-slate-700">
            <NavLink to="/admin/customerlist">
              {({ isActive, isPending }) => (
                <span className={isActive ? "active" : ""}>Customer List</span>
              )}
            </NavLink>
          </div>
          <div className="px-2 py-2 w-full text-white  hover:bg-slate-700">
          <NavLink to="/admin/orderlist">
              {({ isActive, isPending }) => (
                <span className={isActive ? "active" : ""}>Order list</span>
              )}
            </NavLink>
          </div>
          <div className="px-2 py-2 w-full text-white  hover:bg-slate-700">
          <NavLink to="/admin/productlist">
              {({ isActive, isPending }) => (
                <span className={isActive ? "active" : ""}>Product list</span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
      {/* <div className='overflow-y-auto max-h-screen '> 
           {store.map((product) => <ProductListAdmin product={product} /> )} 
             </div> */}
      <Outlet />
    </div>
  );
}

export default AdminDashboardView;
