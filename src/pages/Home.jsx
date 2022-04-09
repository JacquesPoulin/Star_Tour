import React from "react";
import Navbar from "../components/Navbar";
import HomeHeader from "../components/home/HomeHeader";
import HomeLinks from "../components/home/HomeLinks";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <HomeLinks />
    </div>
  );
};

export default Home;
