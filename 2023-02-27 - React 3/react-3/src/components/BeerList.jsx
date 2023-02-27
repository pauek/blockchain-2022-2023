import React, { useEffect, useState } from "react";
import Beer from "./Beer";
import SearchForm from "./SearchForm";
import "./BeerList.css";

const BeerList = () => {
  const [beerList, setBeerList] = useState(null);

  const searchBeers = async (query) => {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?beer_name=${query}&per_page=20`
    );
    const loadedBeerList = await response.json();
    setBeerList(loadedBeerList);
  };

  let list = <div>No beers.</div>;
  if (beerList) {
    list = <ol className="beer-list">
      {beerList.map((beer) => (
        <Beer key={beer.id} beer={beer} />
      ))}
    </ol>
  }
  return (
    <div className="beer-list">
      <SearchForm onQuery={searchBeers} />
      {list}
    </div>
  );
};

export default BeerList;
