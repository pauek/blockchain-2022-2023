import React, { useState } from "react";
import Beer from './Beer';

const initialBeerList = [
  {
    name: "Blanquita",
    tagline: "Lo vas a flipar",
    image_url: "https://images.punkapi.com/v2/keg.png",
  },
  {
    name: "Negrita",
    tagline: "Un gustazo de muerte",
    image_url: "https://images.punkapi.com/v2/keg.png",
  },
];

const BeerList = () => {
  const [beerList, setBeerList] = useState(initialBeerList);

  if (beerList === null) {
    return <div>Loading...</div>;
  }
  return <ol className="beer-list">
    {beerList.map(beer => <Beer beer={beer} />)}
  </ol>;
};

export default BeerList;
