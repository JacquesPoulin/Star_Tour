import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="absolute flex h-20 min-w-full justify-content-between">
      <nav className="flex justify-center items-center  h-20 min-w-full font-exo text-slate-50">
        <NavLink to="/home">
          <img
            src="../../assets/images/logo-StarTour-white.png"
            alt="logo"
            className=" absolute w-40 h-40 ml-8 -mt-14"
          />
        </NavLink>

        <ul className="flex justify-end w-full h-20 text-2xl text-shadow-gr">
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
      </nav>
    </div>
  );
};

export default NavBar;
