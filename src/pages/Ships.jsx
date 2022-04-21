import React, { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ShipSort from "../components/ships/ShipSort";
import ShipList from "../components/ships/ShipList";
import GoToTop from "../components/GoToTop";

const Ships = () => {
  const [sort, setSort] = useState("");
  console.log(sort);

  return (
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat">
      <NavBar />
      <div className="flex items-center justify-center pb-14 pt-44">
        <h1 className="w-4/6 text-6xl text-center text-slate-50 font-orb text-shadow-wh">
          Découvrez notre flotte de vaisseaux !
        </h1>
      </div>
      <ShipSort setSort={setSort} />
      <ShipList sort={sort} />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Ships;
