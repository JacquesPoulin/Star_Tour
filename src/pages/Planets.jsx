import React, { useState } from "react";
import NavBar from "../components/Navbar";
import PlanetsFilter from "../components/planets/PlanetsFilter";
import PlanetsList from "../components/planets/PlanetsList";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import PlanetsSearch from "../components/planets/PlanetsSearch";
// import PlanetModal from "../components/planets/PlanetModal";

const Planets = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="bg_nightsky dark:bg_lightsky">
      <NavBar />
      <div className="flex items-center justify-center pb-14 pt-44">
<<<<<<< HEAD
        <h1 className="w-4/6 text-6xl text-center text-slate-50 dark:text-slate-900 font-orb text-shadow-wh dark:text-shadow-2">
=======
        <h1 className="w-4/6 text-6xl text-center text-slate-50 font-orb text-shadow-wh bp4:text-4xl">
>>>>>>> 87b47626974ad6b55018428e632140cb0aef427a
          Découvrez toutes les destinations disponibles !
        </h1>
      </div>
      <div className="flex flex-row items-end justify-around bp2:flex-col bp2:items-center bp2:justify-start">
        <PlanetsFilter filter={filter} setFilter={setFilter} />
        <PlanetsSearch search={search} handleSearch={handleSearch} />
      </div>
      <PlanetsList search={search} filter={filter} />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Planets;
