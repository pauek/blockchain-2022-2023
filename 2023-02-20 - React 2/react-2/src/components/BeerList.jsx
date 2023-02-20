import React, { useEffect, useState } from "react";
import Beer from "./Beer";

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
  const [page, setPage] = useState(1);
  const [beerList, setBeerList] = useState(null);

  const nextPage = () => setPage(c => c + 1);

  const loadBeers = async () => {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`
    );
    const loadedBeerList = await response.json();
    setBeerList(loadedBeerList);
  };

  useEffect(() => {
    loadBeers();
  }, [page]);

  if (beerList === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <button onClick={nextPage}>Next Page ({page})</button>
      <ol className="beer-list">
        {beerList.map((beer) => (
          <Beer beer={beer} />
        ))}
      </ol>
    </>
  );
};

export default BeerList;
