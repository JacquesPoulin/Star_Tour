import React from "react";
import PropTypes from "prop-types";

const SortButton = ({ name, img, setSort }) => {
  SortButton.propTypes = {
    name: PropTypes.string.isRequired,
  };
  SortButton.propTypes = {
    img: PropTypes.string.isRequired,
  };
  SortButton.propTypes = {
    setSort: PropTypes.func.isRequired,
  };

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

export default SortButton;
