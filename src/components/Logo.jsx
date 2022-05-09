import React from "react";
import PropTypes from "prop-types";
import Icons from "../../public/assets/logo/logos.svg";

const Logo = ({ id, myStyle }) => {
  return (
    <svg className={myStyle}>
      <use xlinkHref={`${Icons}#${id}`} />
      {/* {name} */}
    </svg>
  );
};

Logo.propTypes = {
  myStyle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Logo;
