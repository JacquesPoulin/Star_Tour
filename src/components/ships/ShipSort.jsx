import React from "react";
import PropTypes from "prop-types";
import SortButton from "./SortButton";

const ShipSort = ({ sort, setSort }) => {
  ShipSort.propTypes = {
    sort: PropTypes.string.isRequired,
  };
  ShipSort.propTypes = {
    setSort: PropTypes.func.isRequired,
  };

  return (
    <div className="sticky bp2:static top-20 w-[25rem] bp2:w-[auto] bp2:flex bp2:flex-col bp2:items-center h-full py-8 bp2:py-2 ml-10 bp1:ml-10 bp1:mr-6 bp2:ml-0 bp2:mr-0 mt-16 bp2:mt-6 border-2 border-slate-50 dark:border-slate-900 rounded-xl box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[8%] bg-opacity-[8%]">
      <p className="pb-6 text-2xl text-center bp2:pb-0 font-orb text-slate-50 dark:text-slate-900">
        Trier les vaisseaux :
      </p>
      {/* Filtre capacité */}
      <div className="w-[20rem] flex flex-col items-center justify-start gap-6 pt-4 pb-8 bp2:pb-4 bp2:gap-2">
        <p className="text-[1.3rem] text-slate-50 dark:text-slate-900 font-orb">
          par Capacité {sort === "cap_asc" && " ︽"}
          {sort === "cap_desc" && " ︾"}
        </p>
        <div className="flex flex-row gap-4">
          <SortButton
            name="cap_asc"
            img="./assets/images/sort_asc.png"
            setSort={setSort}
          />
          <SortButton
            name="cap_desc"
            img="./assets/images/sort_desc.png"
            setSort={setSort}
          />
        </div>
      </div>
      {/* Filtre hyperdrive */}
      <div className="w-[20rem] flex flex-col items-center justify-start gap-6 bp2:gap-2 py-2">
        <p className="text-[1.3rem] text-slate-50 dark:text-slate-900 font-orb">
          par Ratio Hyperdrive{sort === "hyp_asc" && " ︽"}
          {sort === "hyp_desc" && " ︾"}
        </p>
        <div className="flex flex-row gap-4">
          <SortButton
            name="hyp_asc"
            img="./assets/images/sort_asc.png"
            setSort={setSort}
          />
          <SortButton
            name="hyp_desc"
            img="./assets/images/sort_desc.png"
            setSort={setSort}
          />
        </div>
      </div>
    </div>
  );
};

export default ShipSort;
