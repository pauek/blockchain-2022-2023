
fetch("https://api.punkapi.com/v2/beers")
  .then((response) => response.json())
  .then((beers) => {
    for (const { name, tagline } of beers) {
      console.log(`${name}: ${tagline}`);
    }
  })