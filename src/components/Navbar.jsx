import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="absolute flex h-20 min-w-full justify-content-between">
      <nav className="flex h-20 min-w-full font-exo text-slate-50">
        <NavLink to="/Accueil">
          <img
            src="../../assets/images/logo-StarTour-white.png"
            alt="logo"
            className="w-40 h-40 ml-4"
          />
        </NavLink>

        <ul className="flex justify-end w-full h-20 text-2xl text-shadow-gr">
          <NavLink to="/Accueil">
            <li className="py-10 mb-10 mr-10 font-medium hover:underline">
              Accueil
            </li>
          </NavLink>

          <NavLink to="/Destinations">
            <li className="py-10 mb-10 mr-10 font-medium hover:underline">
              Destinations
            </li>
          </NavLink>

          <NavLink to="/Reservation">
            <li className="py-10 mb-10 mr-10 font-medium hover:underline">
              Reservation
            </li>
          </NavLink>

          <NavLink to="/Vaisseaux">
            <li className="py-10 mb-10 mr-10 font-medium hover:underline">
              Vaisseaux
            </li>
          </NavLink>

          <NavLink to="/Contact">
            <li className="py-10 mb-10 mr-10 font-medium hover:underline">
              Contact
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
