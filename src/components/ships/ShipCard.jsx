/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ShipCard = ({ id, name, img }) => {
  ShipCard.prototype = {
    id: PropTypes.number.isRequired,
  };
  ShipCard.prototype = {
    name: PropTypes.string.isRequired,
  };
  ShipCard.prototype = {
    img: PropTypes.string.isRequired,
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

  const capacity = parseInt(info.crew) + parseInt(info.passengers);
  const hyperdrive = info.hyperdrive_rating;

  return (
    <div className="flex flex-col justify-start items-center w-[300px] h-[510px] rounded-xl box-shadow-1 bg-[url(assets/images/ship-card.jpg)] bg-cover hover:scale-[1.02]">
      <img className="w-[300px] h-[169px] rounded-t-xl" src={img} alt="ship" />
      <div className="bg-[#ccc1be] w-[50px] h-[50px] rounded-[25px] mt-[-25px]" />
      <img
        className="w-[40px] h-[40px] mt-[-45px]"
        src="assets/images/jedi2.png"
        alt="logo"
      />
      <h3 className=" text-center mt-[10px] text-[1.6rem] font-orb text-shadow-gr">
        {name}
      </h3>
      <p className="self-start pl-[18px] pr-[8px] mt-[15px] text-xl leading-[2.8rem] font-exo text-shadow-gr">
        Fabricant : {info.manufacturer === "Corellian Engineering Corporation" ? "Corellian Corp." : info.manufacturer === "Sienar Fleet Systems, Cyngus Spaceworks" ? "Siennar Fleet Sys." : info.manufacturer === "Gallofree Yards, Inc." ? "Gallofree Yards" : info.manufacturer === "Mon Calamari shipyards" ? "Mon Cala Yards" : info.manufacturer === "Huppla Pasa Tisc Shipwrights Collective" ? "Huppla Pasa Tisc" : info.manufacturer === "Kuat Drive Yards, Allanteen Six shipyards" ? "Kuat Drive Yards" : info.manufacturer === "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated" ? "Theed Space" : info.manufacturer} <br />
        Longueur : {info.length} mètres <br />
        Capacité :{" "}
        {capacity} passagers
        <br />
        Vitesse atmosphérique : {info.max_atmosphering_speed === "n/a" ? "900" : info.max_atmosphering_speed} <br />
        Ratio hyperdrive : {hyperdrive}
      </p>
    </div>
  );
};

export default ShipCard;
