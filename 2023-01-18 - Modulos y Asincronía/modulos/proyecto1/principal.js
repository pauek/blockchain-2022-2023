
// const fetch = require('node-fetch');
import fetch from 'node-fetch';

fetch('https://danluu.com/')
  .then(resp => resp.text())
  .then(body => console.log(body));