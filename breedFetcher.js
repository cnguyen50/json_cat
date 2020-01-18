const request = require('request');
const agrv = process.argv.slice(2);
const breed = agrv[0];
const website = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(website, (error, body) => {
  let data = JSON.parse(body.body);

  if (error) {
    return undefined;
  }

  if (data.length === 0) {
    console.log("Breed is not found");
  } else {
    console.log(data[0].description);
  }
});