const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(website, (error, body) => {
    let data = JSON.parse(body.body);
    
    if (data.length === 0) {
      callback(error, null);
    } else {
      callback(null, data[0].description.trim());
    }
  });
};


module.exports = { fetchBreedDescription };