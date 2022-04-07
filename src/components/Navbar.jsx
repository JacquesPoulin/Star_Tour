import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="min-w-full h-20 flex justify-content-between">
      <nav className="min-w-full h-20 flex">
        <NavLink to="/Acceuil">
          <img
            src="../../src/assets/logo/logo-StarTour-black.png"
            alt="logo"
            className="w-28 h-28 ml-4"
          />
        </NavLink>

        <ul className="w-full h-20 flex justify-end">
          <NavLink to="/Acceuil">
            <li className="mr-10 mb-10 font-medium py-10 hover:text-gray-400">
              Acceuil
            </li>
          </NavLink>

          <NavLink to="/Destinations">
            <li className="mr-10 mb-10 font-medium py-10 hover:text-gray-400">
              Destinations
            </li>
          </NavLink>

          <NavLink to="/Reservation">
            <li className="mr-10 mb-10 font-medium py-10 hover:text-gray-400">
              Reservation
            </li>
          </NavLink>

          <NavLink to="/Vaisseaux">
            <li className="mr-10 mb-10 font-medium py-10 hover:text-gray-400">
              Vaisseaux
            </li>
          </NavLink>

          <NavLink to="/Contact">
            <li className="mr-10 mb-10 font-medium py-10 hover:text-gray-400">
              Contact
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
