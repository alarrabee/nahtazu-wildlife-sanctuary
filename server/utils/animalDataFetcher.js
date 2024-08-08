require('dotenv').config();

async function getAnimalData(name) {
   const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${name}`, {
       headers: {
           'X-Api-Key': process.env.API_NINJAS_API_KEY
       }
   });
   const data = await response.json();
   return data[0]?.summary || ''; // Assuming 'summary' is the key in API response
}

async function getAnimalImage(name) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${name}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    const data = await response.json(); 
    return data.results[0]?.urls.regular || ''; // Assuming 'urls.regular' is the key in API response
}

module.exports = { getAnimalData, getAnimalImage };