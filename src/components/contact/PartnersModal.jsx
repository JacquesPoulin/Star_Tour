import React from "react";
import PropTypes from "prop-types";

const PartnersModal = ({ id, link, setIsModalOpened, img, desc }) => {
  return (
    // >> Modal decoration
    <div className="z-[20] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100vw] h-[100vh] bg-slate-900 flex justify-center items-center bg-opacity-10 backdrop-blur-[2px]">
      <div className="flex flex-col items-center justify-center w-3/5 rounded-lg box-shadow-1">
        <img
          src={img}
          alt={id}
          className="w-full h-[540px] bp2:h-[300px] object-cover z-[1] rounded-xl"
        />
        <button
          type="button"
          onClick={() => {
            setIsModalOpened(false);
          }}
          className="absolute z-10 self-end mr-4 text-5xl text-slate-50 text-shadow-3 font-orb -mt-[470px] bp2:-mt-[230px] hover:scale-105"
        >
          X
        </button>

        <p className="w-1/2 text-center absolute z-[20] font-medium font-orb text-2xl text-slate-50 text-shadow-3 -mb-[350px] bp1:text-[1rem] bp2:-mb-[100px]">
          {desc}
        </p>

        <button
          type="button"
          className="absolute font-orb z-[20] font-medium text-slate-900 bg-opacity-40 rounded-md backdrop-blur-[2px] border-2 border-black text-2xl -mb-[470px] bp1:text-[1.5vw] bp2:-mb-[230px] bp2:text-[2.4vw] bp3:text-[4.2vw] box-shadow-2 bg-slate-50 px-6 hover:scale-[1.01]"
        >
          <a href={link} target="_blank" rel="noreferrer">
            Visiter le site
          </a>
        </button>
      </div>
    </div>
  );
};

PartnersModal.propTypes = {
  id: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default PartnersModal;
