import React from "react";
import { useState } from "react";
import NavBar from "../components/Navbar";
import PlanetsList from "../components/planets/PlanetsList";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import PlanetsSearch from "../components/planets/PlanetsSearch";

const Planets = () => {
  
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }
  
  return (
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat">
      <NavBar />
      <div className="flex items-center justify-center pb-10 pt-44">
        <h1 className="w-4/6 text-6xl text-center text-slate-50 font-orb text-shadow-wh">
          Découvrez toutes les destinations disponibles !
        </h1>
      </div>
      <PlanetsSearch search={search} handleSearch={handleSearch} />
      {console.log(search)}
      <PlanetsList search={search} />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Planets;
