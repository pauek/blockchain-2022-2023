import React, { useState, useEffect } from "react";
import Beer from './Beer';
import * as api from '../api';

const BeerList = ({ query }) => {
  const [beerList, setBeerList] = useState(null);

  useEffect(() => {
    api.searchBeers(query).then(setBeerList);
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
