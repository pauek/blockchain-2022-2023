import React, { useEffect, useState } from "react";
import Beer from './Beer';

const testBeerList = [
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
  const [beerList, setBeerList] = useState(null);

  const loadBeers = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers`);
    const loadedBeerList = await response.json();
    setBeerList(loadedBeerList);
  }

  useEffect(() => {
    loadBeers();
  }, []);

  if (beerList === null) {
    return <div>Loading...</div>;
  }
  return <ol className="beer-list">
    {beerList.map(beer => <Beer beer={beer} />)}
  </ol>;
};

export default BeerList;
