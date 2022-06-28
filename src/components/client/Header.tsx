import React from "react";
import { BiCard } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import { NavLink } from "react-router-dom";
type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-8 py-5">
        <div className="logo col-span-1">
          <NavLink
            className="text-[30px] leading-[60px] md:py-5 font-barlow font-bold uppercase ml-[50px]"
            to={"/"}
          >
            Shopping Cart
          </NavLink>
        </div>
        <div className="col-span-4">
          <ul className="md:flex justify-center md:items-center md:space-x-8 md:py-5 text-[20px] uppercase">
            <li>
              <NavLink className="hover:border-b-2 hover:border-red-700" to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink className="hover:border-b-2 hover:border-red-700" to={"/product"}>Product</NavLink>
            </li>
            <li>
              <NavLink className="hover:border-b-2 hover:border-red-700" to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink className="hover:border-b-2 hover:border-red-700" to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink className="hover:border-b-2 hover:border-red-700" to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-span-1 py-5">
          <ul className="flex text-[18px] font-sans">
            <li>
              <NavLink className="hover:text-red-700" to={"/login"}>Login</NavLink>
            </li>
            <span className="mx-1">/</span>
            <li>
              <NavLink className="hover:text-red-700" to={"/register"}>Register</NavLink>
            </li>
            <li className="ml-3">
              <NavLink to={"/cart"}>
                <BsCartPlus size={"22px"} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
