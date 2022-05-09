import React, { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ShipSort from "../components/ships/ShipSort";
import ShipList from "../components/ships/ShipList";
import GoToTop from "../components/GoToTop";

const Ships = () => {
  const [sort, setSort] = useState("");

  return (
    <div className="bg_nightsky dark:bg_lightsky">

      <div className="flex items-center justify-center pb-14 pt-44">
        <h1 className="w-4/6 px-1 text-6xl text-center bp2:text-5xl bp3:text-4xl text-slate-50 dark:text-slate-900 font-orb text-shadow-wh dark:text-shadow-2">
          Découvrez notre flotte de vaisseaux !
        </h1>
      </div>
      <div className="flex flex-row bp2:flex-col bp2:items-center">
        <ShipSort sort={sort} setSort={setSort} />
        <ShipList sort={sort} />
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Ships;
