// const fetch = require('node-fetch');
import fetch from "node-fetch";

// 1. Para poder usar 'await' tienes que estar dentro de una función 'async'
// 2. Allí donde llame a una función asíncrona, para obtener el resultado,
//    uso 'await'.

const loadBeers = async () => {
  try {
    const response = await fetch(`https://api-errrorrr.punkapi.com/v2/beers`);
    const beers = await response.json();
    for (const { name, tagline } of beers) {
      console.log(`${name}: ${tagline}`);
    }
  } catch (e) {
    console.error("He pillado el error en el scope global");
  }
};

loadBeers();
console.log("Acaba el main");
