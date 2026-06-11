const axios = require('axios');
const https = require('https');
require('dotenv').config();

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

const apiHeaders = {
  'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
  'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
};

async function run() {
  try {
    console.log("Fetching volleyball categories...");
    const url = 'https://sportapi7.p.rapidapi.com/api/v1/sport/volleyball/categories';
    const res = await axiosInstance.get(url, { headers: apiHeaders });
    console.log(`Success! Status: ${res.status}`);
    const categories = res.data.categories || [];
    console.log(`Total categories: ${categories.length}`);
    categories.slice(0, 10).forEach(cat => {
      console.log(`- ${cat.name} (slug: ${cat.slug}, id: ${cat.id})`);
    });
  } catch (err) {
    console.error("Test failed:", err.response ? err.response.data : err.message);
  }
}

run();
