import React, { useState } from "react";
import logo from "../assest/food_logo1.png";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
const Header = () => {
  const [showmenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    // px-2 is mobile version and md:px-4 is desktop version
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* Desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-16">
            <img src={logo} className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap:7">
          <nav className="flex gap-4 md:gap:7 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 text-sm text-center">
              0
            </div>
          </div>
          <div className="text-slate-600 " onClick={handleShowMenu}>
            {/* <div className="border-2 border-solid border-slate-600 p-1 rounded-full">
            <FaUserAlt/>
            </div> */}
            <div className="text-3xl cursor-pointer">
              <HiOutlineUserCircle />
            </div>
            {showmenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow flex flex-col">
                <Link
                  to={"newproduct"}
                  className="whitespace-nowrap cursor-pointer"
                >
                  New Product
                </Link>
                <Link to={"login"} className="whitespace-nowrap cursor-pointer">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
