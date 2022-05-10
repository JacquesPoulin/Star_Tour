// eslint-disable-next-line react/prop-types
import React, { useState } from "react";
import PropTypes from "prop-types";
import PartnersModal from "./PartnersModal";

const PartnersButton = ({ id, name, img, link, desc }) => {
  // >> STATES & SETTERS
  const [isModalOpened, setIsModalOpened] = useState(false);
  // ------------------------------------------
  // >> FUNCTIONS
  const openPartnersModal = () => {
    setIsModalOpened(true);
  };

  const closePartnersModal = () => {
    setIsModalOpened(false);
  };
  // ------------------------------------------

  return (
    <div className="bp2_1:flex bp2_1:justify-center">
      <button
        type="submit"
        id={id}
        className="mt-10 mb-20 font-orb cursor-pointer px-10 text-center border-4 text-slate-50 dark:text-slate-900 border-y-transparent border-x-[#0780FE] dark:border-x-[#FF0010] hover:text-[#0780FE] dark:hover:text-[#FF0010]"
        onClick={openPartnersModal}
      >
        {name}
      </button>
      {isModalOpened && (
        <PartnersModal
          img={img}
          link={link}
          closeModalPartners={closePartnersModal}
          desc={desc}
        />
      )}
    </div>
  );
};
PartnersButton.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PartnersButton;
