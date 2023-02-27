import React from "react";
import "./Beer.css";
import { Link } from "react-router-dom";

const Beer = ({ beer }) => {
  const { id, name, tagline, image_url } = beer;
  return (
    <Link to={`/beers/${id}`}>
      <div className="beer">
        <img src={image_url} alt={tagline} />
        <div className="info">
          <h3>{name}</h3>
          <p>{tagline}</p>
        </div>
      </div>
    </Link>
  );
};

export default Beer;
