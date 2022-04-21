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
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat dark:bg-[url('./assets/images/quizPic/white.jpg')] dark:bg-[length:100vw] dark:bg-repeat">
      <NavBar />
      <div className="flex items-center justify-center pb-14 pt-44">
        <h1 className="w-4/6 text-6xl text-center text-slate-50 dark:text-slate-900 font-orb text-shadow-wh dark:text-shadow-2">
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
