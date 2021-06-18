import React from "react";
import { Link } from "react-router-dom";

const Case = ({ src, title, subtitle, to }) => {
  return (
    <div className="case">
      <Link to={to}>
        <div className="case-details">
          <span>{subtitle}</span>
          <h2>{title}</h2>
        </div>
        <div className="case-image">
          <img src={src} alt={title} />
        </div>
      </Link>
    </div>
  );
};

export default Case;
