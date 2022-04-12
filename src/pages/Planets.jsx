import React from "react";
import NavBar from "../components/Navbar";
import PlanetModal from "../components/planets/PlanetModal";
import PlanetsList from "../components/planets/PlanetsList";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

const Planets = () => {
  return (
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat">
      <NavBar />
      <div className="flex items-center justify-center pt-44">
        <h1 className="w-4/6 text-6xl text-center text-slate-50 font-orb text-shadow-wh">Découvrez toutes les destinations disponibles !</h1>
      </div>
      <PlanetsList />
      <Footer />
      <PlanetModal />
      <GoToTop />
    </div>
  );
};

export default Planets;
