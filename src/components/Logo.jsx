import React from "react";
import PropTypes from "prop-types";
import Icons from "../../public/assets/logo/logos.svg";

// interface Props {
//   name: string;
//   color?: string;
//   style: string;
//   icon: string;
// }

const Logo = ({ id, color, myStyle }) => {
  return (
    <svg className={myStyle} fill={color}>
      <use xlinkHref={`${Icons}#${id}`} />
      {/* {name} */}
    </svg>
  );
};

Logo.propTypes = {
  color: PropTypes.string.isRequired,
  myStyle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Logo;
