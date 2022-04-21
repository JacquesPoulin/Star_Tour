import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@tailwindui/react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute flex h-20 min-w-full justify-content-between">
      {/* DESKTOP MENU */}
      <div className="flex items-center justify-center h-20 min-w-full font-exo text-slate-50 bp2:justify-start">
        <NavLink to="/home">
          {/* Site logo */}
          <img
            src="../../assets/images/logo-StarTour-white.png"
            alt="logo"
            className="absolute w-40 h-40 ml-8 -mt-14"
          />
        </NavLink>
        {/* NAVBAR */}
        <ul className="flex justify-end w-full h-20 text-2xl text-shadow-gr bp2:hidden">
          <NavLink to="/home">
            <li className="py-10 mb-10 mr-10 font-medium hover:underline">
              Accueil
            </li>
          </NavLink>

          <NavLink to="/destination">
            <li className="py-10 mb-10 mr-10 font-medium hover:underline">
              Destinations
            </li>
          </NavLink>

          <NavLink to="/booking">
            <li className="py-10 mb-10 mr-10 font-medium hover:underline">
              Reservation
            </li>
          </NavLink>

          <NavLink to="/ships">
            <li className="py-10 mb-10 mr-10 font-medium hover:underline">
              Vaisseaux
            </li>
          </NavLink>

          <NavLink to="/contact">
            <li className="py-10 mb-10 mr-10 font-medium hover:underline">
              Contact
            </li>
          </NavLink>
        </ul>
        {/* Burger icon */}
        <button
          type="button"
          className="hidden transition-all rounded-md active:outline-none focus:outline-none first-letter:focus:ring-inset mt-9 bp2:inline-block bp2:ml-auto bp2:mr-7"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 rounded-md text-slate-50 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-slate-500 hover:to-slate-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* I will fade in and out */}
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-1000"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-1000"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95 duration-1000"
      >
        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute right-0 md:hidden top-20 mr-7 lg:hidden">
            <ul className="text-xl text-slate-50">
              <NavLink to="/home">
                <li className="mt-4 mb-6 font-medium hover:underline">
                  Accueil
                </li>
              </NavLink>

              <NavLink to="/destination">
                <li className="mb-6 font-medium hover:underline">
                  Destinations
                </li>
              </NavLink>

              <NavLink to="/booking">
                <li className="mb-6 font-medium hover:underline">
                  Reservation
                </li>
              </NavLink>

              <NavLink to="/ships">
                <li className="mb-6 font-medium hover:underline">Vaisseaux</li>
              </NavLink>

              <NavLink to="/contact">
                <li className="font-medium hover:underline">Contact</li>
              </NavLink>
            </ul>
          </div>
        )}
      </Transition>
    </header>
  );
};

export default NavBar;
