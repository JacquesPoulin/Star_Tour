import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="absolute flex h-20 min-w-full justify-content-between">
      <nav className="flex h-20 min-w-full font-exo text-slate-50">
        <NavLink to="/Acceuil">
          <img
            src="../../src/assets/logo/logo-StarTour-white.png"
            alt="logo"
            className="ml-4 w-28 h-28"
          />
        </NavLink>

        <ul className="flex justify-end w-full h-20">
          <NavLink to="/Accueil">
            <li className="py-10 mb-10 mr-10 font-medium hover:text-gray-400">
              Accueil
            </li>
          </NavLink>

          <NavLink to="/Destinations">
            <li className="py-10 mb-10 mr-10 font-medium hover:text-gray-400">
              Destinations
            </li>
          </NavLink>

          <NavLink to="/Reservation">
            <li className="py-10 mb-10 mr-10 font-medium hover:text-gray-400">
              Reservation
            </li>
          </NavLink>

          <NavLink to="/Vaisseaux">
            <li className="py-10 mb-10 mr-10 font-medium hover:text-gray-400">
              Vaisseaux
            </li>
          </NavLink>

          <NavLink to="/Contact">
            <li className="py-10 mb-10 mr-10 font-medium hover:text-gray-400">
              Contact
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
