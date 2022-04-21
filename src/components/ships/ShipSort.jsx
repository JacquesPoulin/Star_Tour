import React from "react";
import PropTypes from "prop-types";
import SortButton from "./SortButton";

const ShipSort = ({ setSort }) => {
  ShipSort.propTypes = {
    setSort: PropTypes.func.isRequired,
  };

  return (
    <div>
      {/* Filtre capacité */}
      <div className="flex items-center justify-end gap-4 pt-4 pb-2 pr-16">
        <p className="text-[1.8rem] text-slate-50 font-orb">
          Trier par capacité :
        </p>
        <SortButton
          name="cap_asc"
          img="assets/images/sort_asc.png"
          setSort={setSort}
        />
        <SortButton
          name="cap_desc"
          img="assets/images/sort_desc.png"
          setSort={setSort}
        />
      </div>
      {/* Filtre hyperdrive */}
      <div className="flex items-center justify-end gap-4 py-2 pr-16">
        <p className="text-[1.8rem] text-slate-50 font-orb">
          Trier par ratio hyperdrive :
        </p>
        <SortButton
          name="hyp_asc"
          img="assets/images/sort_asc.png"
          setSort={setSort}
        />
        <SortButton
          name="hyp_desc"
          img="assets/images/sort_desc.png"
          setSort={setSort}
        />
      </div>
    </div>
  );
};

export default ShipSort;
