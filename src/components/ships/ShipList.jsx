import React from "react";
import PropTypes from "prop-types";
import ShipCard from "./ShipCard";
import ships from "../../../data/ships";

const ShipList = ({ sort }) => {
  // Fonction de comparaison pour la capacité
  const compareCap = (a, b) => {
    if (a.cap < b.cap) {
      return -1;
    }
    if (a.cap > b.cap) {
      return 1;
    }
    return 0;
  };

  // Fonction de comparaison pour l'hyperdrive
  const compareHyp = (a, b) => {
    if (a.hyp < b.hyp) {
      return -1;
    }
    if (a.hyp > b.hyp) {
      return 1;
    }
    return 0;
  };

  // Constante sortedShips qui trie le tableau ships en fonction de la valeur de 'sort'
  let sortedShips = [];
  if (sort === "cap_asc") {
    sortedShips = ships.sort(compareCap);
  } else if (sort === "cap_desc") {
    sortedShips = ships.sort(compareCap).reverse();
  } else if (sort === "hyp_asc") {
    sortedShips = ships.sort(compareHyp);
  } else if (sort === "hyp_desc") {
    sortedShips = ships.sort(compareHyp).reverse();
  } else if (!sort) {
    sortedShips = ships;
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-12 px-0 py-8 pb-20 mt-8 bp1:px-4">
      {sortedShips.map((ship, index) => (
        <ShipCard key={index} {...ship} sort={sort} />
      ))}
    </div>
  );
};

ShipList.propTypes = {
  sort: PropTypes.string.isRequired,
};

export default ShipList;
