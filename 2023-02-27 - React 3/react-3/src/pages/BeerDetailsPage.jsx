import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './BeerDetailsPage.css';
import { loadBeer } from '../api';

const BeerDetailsPage = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    loadBeer(id).then(setBeer);
  }, [id]);

  if (beer === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="beer-details">
      <img src={beer.image_url} alt="Beer picture" />
      <div className="info">
        <h1>{beer.name}</h1>
        <h3>{beer.tagline}</h3>
        <p>{beer.description}</p>
      </div>
    </div>
  );
};

export default BeerDetailsPage;
