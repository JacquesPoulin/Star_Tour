// eslint-disable-next-line react/prop-types
import React, { useState } from "react";
import PropTypes from "prop-types";
import PartnersModal from "./PartnersModal";

const PartnersButton = ({ id, name, img, link, desc }) => {
  // >> STATES & SETTERS
  const [isModalOpen, setIsModalOpen] = useState(false);
  // ------------------------------------------
  // >> FUNCTIONS
  const openModalPartners = () => {
    setIsModalOpen(true);
  };

  const closeModalPartners = () => {
    setIsModalOpen(false);
  };
  // ------------------------------------------

  return (
    <div>
      <button
        type="submit"
        id={id}
        className="mt-10 mb-20 font-orb cursor-pointer px-10 text-center border-4 text-slate-50 dark:text-slate-900 border-y-transparent border-x-[#0780FE] dark:border-x-[#FF0010] hover:text-[#0780FE] dark:hover:text-[#FF0010]"
        onClick={openModalPartners}
      >
        {name}
      </button>
      {isModalOpen && (
        <PartnersModal
          img={img}
          link={link}
          closeModalPartners={closeModalPartners}
          desc={desc}
        />
      )}
    </div>
  );
};
PartnersButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PartnersButton;
