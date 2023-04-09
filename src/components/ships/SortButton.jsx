import React from "react";
import PropTypes from "prop-types";

const SortButton = ({ name, img, setSort }) => {
  const handleSort = () => {
    setSort(name);
  };

  return (
    <button
      type="button"
      onClick={handleSort}
      className="w-12 h-12 border-[1px] rounded-md bg-slate-50 dark:bg-slate-900 bg-opacity-10 box-shadow-1 dark:box-shadow-1 border-slate-50 dark:border-slate-900 hover:bg-[#679ec2] hover:bg-opacity-40 dark:hover:bg-opacity-40"
    >
      <img className="m-auto w-7 h-7" src={img} alt={name} />
    </button>
  );
};

SortButton.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default SortButton;
