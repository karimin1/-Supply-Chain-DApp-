import React from "react";
import { useEffect, useState, useContext } from "react";
import { TrackingContext } from "../Context/TrackingContext";
import { Nav1, Nav2, Nav3 } from "../Components/index";
const NavBar = () => {
  console.log("TrackingContect", TrackingContext);

  const [state, setState] = useState(true);
  const { currentUser, checkWalletConnection } = useContext(TrackingContext);
  const navigation = [
    {
      title: "home",
      path: "#",
    },
    {
      title: "Services",
      path: "#",
    },
    {
      title: "Contact Us",
      path: "#",
    },
    {
      title: "ERC20",
      path: "#",
    },
  ];
  useEffect(() => {
    document.onClick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);
  console.log("navigation", navigation);
  return (
    <nav
      className={`bg-white pb-5 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className=" flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex-shrink-0">
          <a href="javascript:void(0)">
            <img
              src="https://floatui.com/_next/static/media/logo-dark.b0d0c4d1.svg"
              width={120}
              height={50}
              alt="float ui"
            />
          </a>
          {/* <div className="md:hidden ml-4">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? <Nav1 /> : <Nav2 />}
            </button>
          </div> */}
        </div>
        {/* 
        <div
          className={`flex-1 md:flex md:items-center md:justify-between ${
            state ? "block" : "hidden"
          }`}
        ></div>

        <ul
          className=" flex-1  list-none flex-row  items-center justify-between "
          style={{ gap: "2rem" }}
        >
          {navigation.map((el, i) => {
            return (
              <li key={i}>
                <a
                  className="block text-gray-700 hover:text-gray-900 "
                  href={el.path}
                >
                  {el.title}
                </a>
              </li>
            );
          })}
        </ul> */}
        <div
          className={`bg-red-500 flex items-center max-w-screen-xl mx-auto px-4 md:px-8 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="bg-red-500 md:flex list-none flex items-center justify-between gap-8">
            {navigation.map((el, i) => (
              <li key={i}>
                <a
                  className="block text-gray-700 hover:text-gray-900 mr-2"
                  href={el.path}
                >
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end items-center gap-x-4">
          {currentUser ? (
            <p className="w-full text-left flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-black hover:bg-gray-900 rounded-full">
              {currentUser.slice(0, 25)}...
            </p>
          ) : (
            <button
              onClick={() => checkWalletConnection()}
              className="w-full text-left flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-black hover:bg-gray-900 rounded-full"
            >
              Conect wallet
              <Nav3 />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
