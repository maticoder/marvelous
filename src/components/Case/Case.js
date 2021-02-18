import React from "react";

const Case = ({
  src,
  title,
  subtitle
}) => {
  return (
    <div className="case">
      <div className="case-details">
        <span>{subtitle}</span>
        <h2>{title}</h2>
      </div>
      <div className="case-image">
        <img src={src} alt={title}/>
      </div>
    </div>
  );
};

export default Case;
