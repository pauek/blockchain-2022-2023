import React from "react";

const Beer = ({ beer }) => {
  const { name, tagline, image_url } = beer;
  return (
    <div>
      <div className="name" style={{ fontWeight: "bold" }}>{name}</div>
      <div className="tagline">{tagline}</div>
      <img
        src={image_url}
        alt={tagline}
        style={{ width: "70px", aspectRatio: "1 / 2" }}
      />
    </div>
  );
};

export default Beer;
