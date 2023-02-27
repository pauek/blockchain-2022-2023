import React, { useState, useEffect } from "react";
import Beer from './Beer';

const BeerList = ({ query }) => {
  const [beerList, setBeerList] = useState(null);

  const searchBeers = async () => {
    if (query) {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?beer_name=${query}&per_page=20`
      );
      const loadedBeerList = await response.json();
      setBeerList(loadedBeerList);
    } else {
      setBeerList(null);
    }
  };

  useEffect(() => {
    searchBeers();
  }, [query]);

  if (beerList === null || beerList.length === 0) {
    return <div>No beers.</div>;
  }
  return (
    <ol className="beer-list">
      {beerList.map((beer) => (
        <Beer key={beer.id} beer={beer} />
      ))}
    </ol>
  );
};

export default BeerList;
