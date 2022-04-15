import React from "react";
import { useState } from "react";
import NavBar from "../components/Navbar";
import PlanetsFilter from "../components/planets/PlanetsFilter";
import PlanetModal from "../components/planets/PlanetModal";
import PlanetsList from "../components/planets/PlanetsList";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import PlanetsSearch from "../components/planets/PlanetsSearch";

const Planets = () => {
  
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  const handleFilter = (x) => {
    setFilter(x);
  }
  
  return (
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat">
      <NavBar />
      <div className="flex items-center justify-center pb-14 pt-44">
        <h1 className="w-4/6 text-6xl text-center text-slate-50 font-orb text-shadow-wh">
          Découvrez toutes les destinations disponibles !
        </h1>
      </div>
      <div className="flex flex-row items-end justify-around bp2:flex-col bp2:items-center bp2:justify-start">
        <PlanetsFilter setFilter={setFilter}/>
        {console.log(filter)}
        <PlanetsSearch search={search} handleSearch={handleSearch} />
        {console.log(search)}
      </div>
      <PlanetsList search={search} filter={filter} />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Planets;
