import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ShipCard = ({ id, name, img }) => {
  ShipCard.prototype = {
    id: PropTypes.number.isRequired,
  };
  ShipCard.prototype = {
    id: PropTypes.string.isRequired,
  };
  ShipCard.prototype = {
    id: PropTypes.string.isRequired,
  };
  const [info, setInfo] = useState({});
  const getInfo = () => {
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((res) => res.data)
      .then((data) => setInfo(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="flex flex-col justify-start items-center w-[300px] h-[425px] rounded-xl box-shadow-1 bg-[url(assets/images/ship-card.jpg)] bg-cover hover:scale-[1.02]">
      <img className="w-[300px] h-[169px] rounded-t-xl" src={img} alt="ship" />
      <div className="bg-[#ccc1be] w-[50px] h-[50px] rounded-[25px] mt-[-25px]"></div>
      <img
        className="w-[40px] h-[40px] mt-[-45px]"
        src="assets/images/jedi2.png"
        alt="logo"
      />
      <h3 className="text-center mt-[10px] text-[1.7rem] font-orb text-shadow-gr">
        {name}
      </h3>
      <p className="self-start pl-[18px] mt-[15px] text-xl leading-8 font-exo text-shadow-gr">
        Fabricant : {info.manufacturer} <br />
        Longueur : {info.length} <br />
        Capacité : {info.cargo_capacity} <br />
        Vitesse atmosphérique : {info.max_atmosphering_speed} <br />
        Ratio hyperdrive : {info.hyperdrive_rating}
      </p>
    </div>
  );
};

export default ShipCard;
