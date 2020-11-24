const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    let stormUrl = `https://api.weather.gov/alerts/active?area=TX`
    axios.get(stormUrl).then((apiResponse) => {
        let features = apiResponse.data.features;       
        let warnings = features.map((x) => x.properties.headline );
        res.render('index', {warnings: warnings});
    });
  });

  let wikiUrl = `https://api.weather.gov/alerts/active?area=TX`
  axios.get(wikiUrl).then((apiResponse) => {
      let features = apiResponse.data.features;
      
    console.log(2)
});

module.exports = router;

