import React from "react";
import NavBar from "../components/Navbar";
import Footer from '../components/Footer';
import ShipList from "../components/ships/ShipList";

const Ships = () => {
  return (
    <div className="bg-[url('./assets/images/dark_bg.jpg')] bg-[length:100vw] bg-repeat">
      <NavBar />
      <div className="flex items-center justify-center pb-14 pt-44">
        <h1 className="w-4/6 text-6xl text-center text-slate-50 font-orb text-shadow-wh">
          Découvrez notre flotte de vaisseaux !
        </h1>
      </div>
      <ShipList />
      <Footer />
    </div>
  );
};

export default Ships;
