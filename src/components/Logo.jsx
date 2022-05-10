import React from "react";
import PropTypes from "prop-types";
import Icons from "../../public/assets/logo/logos.svg";

const Logo = ({ id, myStyle }) => {
  // ------------------------------------------
  // >> COMPONENT TO CALL SVG IN COMPONENTS
  // ------------------------------------------
  return (
    <svg className={myStyle}>
      <use xlinkHref={`${Icons}#${id}`} />
    </svg>
  );
};

Logo.propTypes = {
  myStyle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Logo;
