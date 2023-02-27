import React from "react";
import "./Beer.css";

const Beer = ({ beer }) => {
  const { name, tagline, image_url } = beer;
  return (
    <div className="beer">
      <img src={image_url} alt={tagline} />
      <div className="info">
        <h3>{name}</h3>
        <p>{tagline}</p>
      </div>
    </div>
  );
};

export default Beer;
