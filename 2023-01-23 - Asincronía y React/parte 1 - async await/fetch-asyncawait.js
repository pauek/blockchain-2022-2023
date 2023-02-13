
// 1. Para poder usar 'await' tienes que estar dentro de una función 'async'
// 2. Allí donde llame a una función asíncrona, para obtener el resultado,
//    uso 'await'.

const loadBeers = async () => {
  const response = await fetch(`https://api.punkapi.com/v2/beers`);
  const beers = await response.json();
  for (const { name, tagline } of beers) {
    console.log(`${name}: ${tagline}`);
  }
}

loadBeers();
console.log("Acaba el main");
