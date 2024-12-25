import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [verticalNav, setNav] = useState(false);
  const [genreToggle, setGenreToggle] = useState(false);
  return (
    <>
      {/*Horizontal NavBar  */}
      <div className="flex justify-between p-2  items-center bg-transparent top-0 z-10 border-b-2 lg:border-none ">
        <div className="customFont text-4xl tracking-widest text-gray-600 pl-5">
          MoviesHive
        </div>
        <div className="flex ">
          <ul className="flex gap-8 pr-5 text-gray-400  ">
            <li className="hidden md:block">
              <Link to="/">Home </Link>
            </li>
            <li className="hidden md:block">
              <Link to="/Explore">Explore</Link>
            </li>
            <li className="hidden md:block">
              <div
                className="relative cursor-pointer"
                onClick={() => setGenreToggle(!genreToggle)}
              >
                Genre
                <div
                  className={` absolute z-10 bg-white mt-4 -left-4 w-32  ${
                    genreToggle ? "block" : "hidden"
                  }`}
                >
                  <ul className=" border-x-2 text-black">
                    <li className="p-2 border-black border-b-[0.5px]">
                      Adventure
                    </li>
                    <li className="p-2 border-black border-b-[0.5px]">
                      Horror
                    </li>
                    <li className="p-2 border-black border-b-[0.5px]">
                      Thriller
                    </li>
                    <li className="p-2 border-black border-b-[0.5px]">
                      Action
                    </li>
                    <li className="p-2 border-black border-b-[0.5px]">
                      Animation
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="hidden md:block">
              <Link to="/Shows">Shows</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/Watchlist">Watchlist</Link>
            </li>
            <li className=" block md:hidden text-2xl z-[99999] ">
              <button onClick={() => setNav(!verticalNav)}>
                <i className="bi bi-list"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Verical NavBar */}
      <div
        className={`fixed top-0 right-0 transition-all duration-200 h-full z-[9999]  ${
          verticalNav ? "bg-white" : "pointer-events-none "
        }`}
      >
        <ul
          className={`h-full z-100 gap-y-7 flex flex-col w-[30vw] sm:w-[25vw] p-4 text-gray-600 transition-transform duration-100 transform mt-10 ${
            verticalNav
              ? "translate-x-0 shadow-lg  bg-white "
              : "translate-x-full  "
          } `}
        >
          <li>
            <Link to="/" onClick={() => setNav(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Explore" onClick={() => setNav(false)}>
              Explore
            </Link>
          </li>
          <li>Genre</li>

          <li>
            <Link to="/Shows" onClick={() => setNav(false)}>
              Shows
            </Link>
          </li>
          <li>
            <Link to="/Watchlist" onClick={() => setNav(false)}>
              Watchlist
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
