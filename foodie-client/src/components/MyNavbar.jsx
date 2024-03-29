import React, { useState, useEffect, useContext } from "react";
import foodieLogo from "../assets/images/foodie-logo.png";
import { FaRegUser } from "react-icons/fa";
import Modal from "./Modal";
import { AuthContext } from "./contexts/AuthProvider";
import Loginprofile from "./Loginprofile";

const MyNavbar = () => {
  const [isSticky, setisSticky] = useState(false);

  //adding authContext
  const { user } = useContext(AuthContext);
  // console.log(user);
  //handle scroll functions
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setisSticky(true);
      } else {
        setisSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="max-w-screen-2x1 container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <details>
                  <summary>Menu</summary>
                  <ul className="p-2">
                    <li>
                      <a href="/menu">All</a>
                    </li>
                    <li>
                      <a>Salad</a>
                    </li>
                    <li>
                      <a>Pizza</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Service</summary>
                  <ul className="p-2">
                    <li>
                      <a>Online Order</a>
                    </li>
                    <li>
                      <a>Table Booking</a>
                    </li>
                    <li>
                      <a>Order Tracking</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Offers</a>
              </li>
            </ul>
          </div>
          <a href="/">
            <img
              className="h-12 w-12 object-contain mr-2"
              src={foodieLogo}
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="bg-green" href="/">
                Home
              </a>
            </li>
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="p-2">
                  <li>
                    <a href="/menu">All</a>
                  </li>
                  <li>
                    <a>Salad</a>
                  </li>
                  <li>
                    <a>Pizza</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Service</summary>
                <ul className="p-2">
                  <li>
                    <a>Online Order</a>
                  </li>
                  <li>
                    <a>Table Booking</a>
                  </li>
                  <li>
                    <a>Order Tracking</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Offers</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle hidden lg:flex">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hidden lg:flex"
          >
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          {/* {Login button} */}
          {user ? <><Loginprofile user={user} /></>: (
            <>
              <button
                className="btn flex item-center gap-2 rounded-full px-6 bg-green text-white"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                <FaRegUser /> Login
              </button>
              <Modal />
            </>
          )}

          <Modal />
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;
