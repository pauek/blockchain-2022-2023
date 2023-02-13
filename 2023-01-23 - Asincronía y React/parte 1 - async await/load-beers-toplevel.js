(async () => {
  const response = await fetch(`https://api.punkapi.com/v2/beers`);
  const beers = await response.json();
  for (const { name, tagline } of beers) {
    console.log(`${name}: ${tagline}`);
  }
  console.log("Fin");
})();
