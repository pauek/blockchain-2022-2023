const API_ROOT = `https://api.punkapi.com/v2`;

export const loadBeer = async (id) => {
  const response = await fetch(`${API_ROOT}/beers/${id}`);
  const [beer] = await response.json();
  return beer;
};

export const searchBeers = async (query) => {
  if (!query) {
    return null;
  }
  const response = await fetch(
    `${API_ROOT}/beers?beer_name=${query}&per_page=20`
  );
  return await response.json();
};
