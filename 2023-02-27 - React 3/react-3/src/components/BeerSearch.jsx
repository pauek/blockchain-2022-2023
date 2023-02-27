import React, { useState } from "react";
import "./BeerSearch.css";
import SearchForm from "./SearchForm";
import BeerList from "./BeerList";

const BeerSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="beer-list">
      <SearchForm onQuery={setQuery} />
      <p>Results for "{query}":</p>
      <BeerList query={query} />
    </div>
  );
};

export default BeerSearch;
