import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Drawer from "./Drawer";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useStore from "../hooks/useStore";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {Cartiopen,setcartOpen} = useStore() 


  return (
    <nav className="sticky top-0 z-3  w-full  flex bg-gray-800 items-center px-2 justify-between sm:px-5 md:px-5 lg:justify-around xl:justify-around py-4   text-white">
      {/* sm:justify-between md:justify-between lg:justify-around */}
      {/* logo */}
      <div>
      <NavLink to="/">
  {({ isActive, isPending }) => (
    <span className={isActive ? "active" : ""}><h1 className="text-white font-bold text-3xl list-none">
    <span className="text-red-800 ">RE</span>PLIQ
  </h1></span>
  )}
</NavLink>
        
      </div>

      {/* menu */}

      <ul className="hidden sm:flex md:flex lg:flex justify-between gap-5 ">
        {/* sm:block   mr-2  md:flex  flex-row justify-between gap-3 */}
        <NavLink to="/login">
  {({ isActive, isPending }) => (
    <span className={isActive ? "active" : ""}>Login</span>
  )}
</NavLink>

<NavLink to="/">
  {({ isActive, isPending }) => (
    <span className={isActive ? "active" : ""}>Registration</span>
  )}
</NavLink>
        <NavLink to="/admin">
  {({ isActive, isPending }) => (
    <span className={isActive ? "active" : ""}>admin</span>
  )}
</NavLink>
        <li onClick={()=> setcartOpen(!Cartiopen)}><FontAwesomeIcon icon={faShoppingCart} /></li>
      </ul>

      {/* Mobile Menu */}

      <div className="flex items-center justify-between sm:hidden">
        <button
          type="button"
          className="  p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!Cartiopen)}
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
