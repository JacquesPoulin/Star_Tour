import React from "react";
import Navbar from "../components/Navbar";
import HomeHeader from "../components/home/HomeHeader";
import HomeDescription from "../components/home/HomeDescription";
import HomeLinks from "../components/home/HomeLinks";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <HomeDescription />
      <HomeLinks />
      <Footer />
    </div>
  );
};

export default Home;
