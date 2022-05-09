import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import Toggle from "./darkmode/ThemeToggle";
import { ThemeProvider } from "./darkmode/ThemeContext";
import Logo from "./Logo";

const NavBar = () => {
  const [isOpened, setIsOpen] = useState(false);

  return (
    <header className="absolute z-[99] flex h-20 min-w-full justify-content-between">
      {/* DESKTOP MENU */}
      <div className="flex items-center justify-center h-20 min-w-full font-exo text-slate-50 dark:text-slate-900 bp2:justify-start">
        <NavLink to="/home">
          {/* Site logo */}
          <div>
            <Logo
              myStyle="absolute w-40 h-40 ml-8 -mt-14 fill-slate-50 dark:fill-slate-900"
              name="logos-star-tour"
              id="logos-star-tour"
            />
          </div>
        </NavLink>
        {/* NAVBAR */}
        <div className="flex justify-end w-full h-20 bp2:items-center">
          <ul className="flex text-2xl text-shadow-gr bp2:hidden ">
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
            <NavLink to="/ships">
              <li className="py-10 mb-10 mr-10 font-medium hover:underline">
                Vaisseaux
              </li>
            </NavLink>
            <NavLink to="/booking">
              <li className="py-10 mb-10 mr-10 font-medium hover:underline">
                Reservation
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="py-10 mb-10 mr-10 font-medium hover:underline">
                Contact
              </li>
            </NavLink>
          </ul>
          <ThemeProvider>
            <div className="py-10 mr-10 -mt-2 font-medium bp2:mt-8 bp2:mr-3">
              <Toggle />
            </div>
          </ThemeProvider>
        </div>
        {/* Burger icon */}
        <button
          type="button"
          className="hidden transition-all rounded-md active:outline-none focus:outline-none first-letter:focus:ring-inset mt-9 bp2:inline-block bp2:ml-auto bp2:mr-7"
          onClick={() => setIsOpen(!isOpened)}
        >
          <Logo
            myStyle="w-8 h-8 rounded-md text-slate-50 dark:text-slate-900 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-slate-500 hover:to-slate-900 dark:hover:text-slate-900 dark:hover:from-slate-500 dark:hover:to-white"
            name="logos-menu-burger"
            id="logos-menu-burger"
          />
        </button>

        {/* Transition : to FADE IN and FADE OUT */}
      </div>
      <Transition
        show={isOpened}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* MOBILE MENU */}
        {isOpened && (
          <div className="absolute right-0 w-full rounded-md p-7 md:hidden top-24 lg:hidden bg-neutral-900">
            <ul className="items-center justify-center text-3xl text-center text-slate-50 font-exo">
              <NavLink to="/home">
                <li className="mt-2 mb-8 font-medium hover:underline">
                  Accueil
                </li>
              </NavLink>

              <NavLink to="/destination">
                <li className="mb-8 font-medium hover:underline">
                  Destinations
                </li>
              </NavLink>

              <NavLink to="/ships">
                <li className="mb-8 font-medium hover:underline">Vaisseaux</li>
              </NavLink>

              <NavLink to="/booking">
                <li className="mb-8 font-medium hover:underline">
                  Reservation
                </li>
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
