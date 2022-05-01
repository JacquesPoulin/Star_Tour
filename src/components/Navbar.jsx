/* eslint-disable react/self-closing-comp */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import Toggle from "./darkmode/ThemeToggle";
import { ThemeProvider } from "./darkmode/ThemeContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute flex h-20 min-w-full justify-content-between">
      {/* DESKTOP MENU */}
      <div className="flex items-center justify-center h-20 min-w-full font-exo text-slate-50 dark:text-slate-900 bp2:justify-start">
        <NavLink to="/home">
          {/* Site logo */}
          <div>
            <svg
              className="absolute w-40 h-40 ml-8 -mt-14 fill-slate-50 dark:fill-slate-900"
              height="100%"
              strokeMiterlimit="10"
              version="1.1"
              viewBox="0 0 512 512"
              width="100%"
            >
              <g opacity="1" stroke="none">
                <path
                  d="M251.317 248.849L251.317 270.567L228.185 270.567L228.185 321.78L204.447 321.78L204.447 270.567L181.315 270.567L181.315 248.849L251.317 248.849Z"
                  fillRule="evenodd"
                />
                <path
                  d="M327.582 285.719C327.582 293.699 325.915 300.5 322.582 306.123C319.248 311.746 314.425 315.972 308.111 318.801C301.798 321.629 294.264 323.043 285.51 323.043C276.755 323.043 269.238 321.62 262.958 318.775C256.679 315.93 251.923 311.721 248.69 306.149C245.458 300.576 243.842 293.766 243.842 285.719C243.842 279.624 244.768 274.262 246.62 269.632C248.471 265.003 251.182 261.105 254.751 257.94C258.32 254.775 262.698 252.376 267.883 250.743C273.068 249.11 278.944 248.293 285.51 248.293C294.23 248.293 301.756 249.733 308.086 252.612C314.416 255.491 319.248 259.733 322.582 265.339C325.915 270.946 327.582 277.739 327.582 285.719ZM269.752 285.921C269.752 290.601 270.804 294.675 272.908 298.143C275.013 301.611 279.163 303.346 285.358 303.346C290.139 303.346 293.717 302.436 296.091 300.618C298.465 298.8 299.946 296.721 300.535 294.381C301.125 292.04 301.52 289.221 301.722 285.921C301.52 281.24 300.392 277.158 298.338 273.673C296.284 270.188 291.958 268.445 285.358 268.445C274.954 268.445 269.752 274.271 269.752 285.921Z"
                  fillRule="evenodd"
                />
                <path
                  d="M352.279 248.849L352.279 291.982C352.077 296.898 353.02 300.315 355.108 302.234C357.195 304.154 360.461 305.181 364.906 305.315C368.475 305.248 371.455 304.204 373.846 302.184C376.236 300.164 377.364 296.763 377.23 291.982L377.23 248.849L400.968 248.849L400.968 291.628C400.867 297.689 399.865 302.529 397.963 306.149C396.06 309.768 393.653 312.79 390.74 315.215C387.828 317.639 384.174 319.524 379.78 320.871C375.386 322.218 370.495 322.959 365.108 323.094C360.63 322.993 356.076 322.378 351.446 321.25C346.816 320.122 342.776 318.346 339.324 315.922C335.873 313.497 333.213 310.383 331.344 306.578C329.476 302.773 328.541 297.807 328.541 291.678L328.541 248.849L352.279 248.849Z"
                  fillRule="evenodd"
                />
                <path
                  d="M404.503 321.78L404.503 248.849L451.979 248.849C457.838 249.388 462.653 250.936 466.424 253.495C470.195 256.055 472.957 259.489 474.707 263.799C476.054 270.264 476.122 275.247 474.909 278.749C473.697 282.251 471.576 285.18 468.546 287.537C465.515 289.894 461.172 291.746 455.515 293.093L460.97 300.063L482.788 300.063L482.788 321.78L454 321.78L430.868 297.689L430.868 321.78L404.503 321.78ZM430.868 267.031L430.868 280.466L449.252 280.466C450.229 280.466 451.289 280.104 452.434 279.38C453.579 278.656 454.185 276.83 454.252 273.9C454.084 271.105 453.402 269.262 452.207 268.37C451.011 267.477 450.01 267.031 449.202 267.031L430.868 267.031Z"
                  fillRule="evenodd"
                />
              </g>
              <g opacity="1" stroke="none">
                <path
                  d="M127.134 172.682L104.204 172.682C95.5501 172.413 94.2706 174.803 100.365 179.854C111.274 189.417 116.628 198.71 116.426 207.734C116.224 216.757 110.87 222.145 100.365 223.896L36.7267 223.896L36.7267 202.178L76.93 202.178C86.4589 202.447 87.671 199.787 80.5664 194.198C68.8489 183.423 63.8656 173.524 65.6165 164.5C67.3674 155.476 72.8894 150.964 82.1826 150.964L127.134 150.964L127.134 172.682Z"
                  fillRule="evenodd"
                />
                <path
                  d="M188.398 150.964L188.398 172.682L165.266 172.682L165.266 223.896L141.528 223.896L141.528 172.682L118.396 172.682L118.396 150.964L188.398 150.964Z"
                  fillRule="evenodd"
                />
                <path
                  d="M183.852 223.896L207.843 150.964L244.056 150.964L268.451 223.896L240.874 223.896L236.278 210.764L214.611 210.764L210.015 223.896L183.852 223.896ZM226.025 167.126L215.571 196.016L235.672 196.016L226.025 167.126Z"
                  fillRule="evenodd"
                />
                <path
                  d="M267.441 223.896L267.441 150.964L314.917 150.964C320.776 151.503 325.591 153.052 329.362 155.611C333.133 158.17 335.894 161.604 337.645 165.914C338.992 172.379 339.059 177.362 337.847 180.864C336.635 184.366 334.514 187.295 331.483 189.652C328.453 192.009 324.109 193.861 318.453 195.208L323.907 202.178L345.726 202.178L345.726 223.896L316.937 223.896L293.805 199.804L293.805 223.896L267.441 223.896ZM293.805 169.147L293.805 182.581L312.19 182.581C313.166 182.581 314.227 182.219 315.372 181.495C316.516 180.771 317.123 178.945 317.19 176.015C317.022 173.221 316.34 171.377 315.144 170.485C313.949 169.593 312.947 169.147 312.139 169.147L293.805 169.147Z"
                  fillRule="evenodd"
                />
              </g>
            </svg>
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
            <div className="py-10 mr-10 -mt-2 font-medium bp2:mt-8">
              <Toggle />
            </div>
          </ThemeProvider>
        </div>
        {/* Burger icon */}
        <button
          type="button"
          className="hidden transition-all rounded-md active:outline-none focus:outline-none first-letter:focus:ring-inset mt-9 bp2:inline-block bp2:ml-auto bp2:mr-7"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 rounded-md text-slate-50 dark:text-slate-900 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-slate-500 hover:to-slate-900 dark:hover:text-slate-900 dark:hover:from-slate-500 dark:hover:to-white"
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
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute p-4 rounded-md md:hidden right-8 top-20 lg:hidden bg-slate-900">
            <ul className="items-center justify-center text-xl text-center text-slate-50 font-exo">
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
