import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const handleThemeChange = () => {
    setIsChecked(prev => !prev);
  };

  useEffect(() => {
    const theme = isChecked ? "dark" : "light";

    document.querySelector("html").setAttribute("data-theme", theme);

    const root = document.getElementById("root");
    root.className = isChecked ? "bg-[#1a1a1a]" : "bg-[#F1F5E8]";

    localStorage.setItem("theme", theme);
  }, [isChecked]);

  const handleSignOut = () => {
    signOut(auth);
    toast.success("Logout Successful! 🎉");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown relative z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/petAndSupplies"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                Pets & Supplies
              </NavLink>
            </li>
            <li>
              {user && (
                <NavLink
                  to="/addProducts"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-gray-700"
                  }
                >
                  Add Listings
                </NavLink>
              )}
            </li>
            <li>
              {user && (
                <NavLink
                  to="/my-products"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-gray-700"
                  }
                >
                  My Listings
                </NavLink>
              )}
            </li>
            <li>
              {user && (
                <NavLink
                  to="/my-orders"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-gray-700"
                  }
                >
                  My Orders
                </NavLink>
              )}
            </li>
            <li>
              {user && (
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-gray-700"
                  }
                >
                  My Profile
                </NavLink>
              )}
            </li>
            <li>
              {user && (
                <NavLink
                  to="/stories"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-gray-700"
                  }
                >
                  Stories
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="">
          <p
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pl-2
            text-3xl font-extrabold tracking-wide drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]
            animate-pulse"
          >
            PawMart
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/petAndSupplies"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              Pets & Supplies
            </NavLink>
          </li>

          <li>
            {user && (
              <NavLink
                to="/addProducts"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                Add Listings
              </NavLink>
            )}
          </li>
          <li>
            {user && (
              <NavLink
                to="/my-products"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                My Listings
              </NavLink>
            )}
          </li>
          <li>
            {user && (
              <NavLink
                to="/my-orders"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                My Orders
              </NavLink>
            )}
          </li>
          <li>
            {user && (
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                My Profile
              </NavLink>
            )}
          </li>
          <li>
            {user && (
              <NavLink
                to="/stories"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                Stories
              </NavLink>
            )}
          </li>
        </ul>
      </div>

      {user && (
        <div className="navbar-end pr-3">
          <div className="mr-2">
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                onClick={handleThemeChange}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          <Link
            onClick={handleSignOut}
            className="btn bg-linear-to-r from-blue-600 to-purple-600 text-white p-3 rounded-md hover:opacity-70 text-lg"
          >
            Logout
          </Link>
        </div>
      )}
      {!user && (
        <div className="navbar-end pr-3">
          {/* theme toggler */}
          <div className="mr-2">
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                onClick={handleThemeChange}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          <Link
            to="/login"
            className="btn bg-linear-to-r from-blue-600 to-purple-600 text-white p-3 rounded-md hover:opacity-70 text-lg"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="btn bg-linear-to-r from-blue-600 to-purple-600 text-white p-3 ml-1 rounded-md hover:opacity-70 text-lg"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
