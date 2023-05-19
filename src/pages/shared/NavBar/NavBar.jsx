import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../../providers/FirebaseAuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const logOutHandler = async () => {
    await logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const link = (
    <>
      <li>
        <NavLink
          className={`bg-white hover:bg-slate-200 text-gray-600 font-semibold`}
          to={`/`}
        >
          Home
        </NavLink>
      </li>

      {user && (
        <>
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
              to={`/add-toy`}
            >
              Add A Toy
            </NavLink>
          </li>
        </>
      )}

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
        {user ? (
          <div className="dropdown dropdown-end bg-white">
            <label
              tabIndex="0"
              className="btn btn-circle border-none m-1 bg-white  hover:bg-white"
              data-toggle="tooltip"
              title={user?.displayName || "No Name"}
            >
              <div className="avatar">
                <div className="w-12 rounded-full">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="" />
                  ) : (
                    <FontAwesomeIcon icon={faUser} size="2x" />
                  )}
                </div>
              </div>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white"
            >
              <li>
                <button onClick={logOutHandler} className="bg-white">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="btn btn-outline btn-success" to={`/login`}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
