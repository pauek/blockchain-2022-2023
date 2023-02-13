const fs = require('fs');

const jsonText = fs.readFileSync('random-user.json');
let user = JSON.parse(jsonText);
console.log(user);