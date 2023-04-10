import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const Drawer = ({ isOpen, setIsOpen }) => {
 
  return (
    <>
    {isOpen && (
      <div className="fixed inset-0 z-20 ml-6 bg-black bg-opacity-50">
        <div className="fixed inset-y-0 right-0 max-w-full flex text-white">
          <div className="w-96 bg-gray-800">
            <div className="flex justify-end">
              <button
                className="p-2 "
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="flex flex-col text-white :hover:bg-white :hover:text-black">
            <NavLink  to="/login">
  {({ isActive, isPending }) => (
    <span className={isActive ? "active," : ""}>Login</span>
  )}
</NavLink>
<NavLink  to="/admin">
  {({ isActive, isPending }) => (
    <span className={isActive ? "active," : ""}>Admin</span>
  )}
</NavLink>
<NavLink  to="/">
  {({ isActive, isPending }) => (
    <span className={isActive ? "active," : ""}>Registration</span>
  )}
</NavLink>

<li className="list-none" onClick={()=> setcartOpen(!Cartiopen)}><FontAwesomeIcon icon={faShoppingCart} /></li>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
    
  );
};

export default Drawer;
