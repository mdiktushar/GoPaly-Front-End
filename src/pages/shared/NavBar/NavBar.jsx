import React from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const link = (
    <>
      {/* <li tabIndex={0}>
              <NavLink className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </NavLink>
              <ul className="p-2">
                <li>
                  <NavLink>Submenu 1</NavLink>
                </li>
                <li>
                  <NavLink>Submenu 2</NavLink>
                </li>
              </ul>
            </li> */}
      <li>
        <NavLink
          className={`bg-white hover:bg-slate-200 text-gray-600 font-semibold`}
          to={`/`}
        >
          Home
        </NavLink>
        </li>

        <li>
        <NavLink
          className={`bg-white hover:bg-slate-200 text-gray-600 font-semibold`}
          to={`/mytoys`}
        >
          My Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`bg-white hover:bg-slate-200 text-gray-600 font-semibold`}
          to={`/addtoy`}
        >
          Add A Toy
        </NavLink>
      </li>

      <li>
        <NavLink
          className={`bg-white hover:bg-slate-200 text-gray-600 font-semibold`}
          to={`/blog`}
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
        <NavLink className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="GoPlay" width={100} />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <NavLink className="btn btn-outline btn-success">Login</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
