import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Tilt from "react-tilt";

const ShipCard = ({ id, name, img, sort }) => {
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
  }, [sort]);

  const capacity = parseInt(info.crew, 10) + parseInt(info.passengers, 10);
  const hyperdrive = info.hyperdrive_rating;

  let manu = "";
  if (info.manufacturer === "Corellian Engineering Corporation") {
    manu = "Corellian Corp.";
  } else if (info.manufacturer === "Sienar Fleet Systems, Cyngus Spaceworks") {
    manu = "Siennar Fleet Sys.";
  } else if (info.manufacturer === "Gallofree Yards, Inc.") {
    manu = "Gallofree Yards";
  } else if (info.manufacturer === "Mon Calamari shipyards") {
    manu = "Mon Cala Yards";
  } else if (info.manufacturer === "Huppla Pasa Tisc Shipwrights Collective") {
    manu = "Huppla Pasa Tisc";
  } else if (
    info.manufacturer === "Kuat Drive Yards, Allanteen Six shipyards"
  ) {
    manu = "Kuat Drive Yards";
  } else if (
    info.manufacturer ===
    "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated"
  ) {
    manu = "Theed Space";
  }

  return (
    <Tilt options={{ max: 8, scale: 1, reverse: true }}>
      <div className="flex flex-col justify-start items-center w-[300px] h-[510px] rounded-xl box-shadow-1 bg-[url('/assets/images/ship-card.jpg')] bg-cover">
        <img
          className="w-[300px] h-[169px] rounded-t-xl"
          src={img}
          alt="ship"
        />
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
          Fabricant : {manu}
          <br />
          Longueur : {info.length} mètres <br />
          Capacité : {capacity} passagers
          <br />
          Vitesse atmosphérique :
          {info.max_atmosphering_speed === "n/a"
            ? "900"
            : info.max_atmosphering_speed}
          <br />
          Ratio hyperdrive : {hyperdrive}
        </p>
      </div>
    </Tilt>
  );
};

ShipCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
ShipCard.propTypes = {
  sort: PropTypes.string.isRequired,
};

export default ShipCard;
