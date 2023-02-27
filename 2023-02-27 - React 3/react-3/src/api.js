export const loadBeer = async (id) => {
  const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  const [beer] = await response.json();
  return beer;
};
