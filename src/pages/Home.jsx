import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeDescription from "../components/home/HomeDescription";
import HomeLinks from "../components/home/HomeLinks";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeDescription />
      <HomeLinks />
      <Footer />
    </div>
  );
};

export default Home;
