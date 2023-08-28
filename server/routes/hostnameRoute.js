// hostnameRoute.js
const express = require('express');
const router = express.Router();

let cachedHostname = null;

// Middleware to fetch and store the hostname
function fetchAndCacheHostname(req, res, next) {
  cachedHostname = req.hostname;
  console.log(`Hostname cached: ${cachedHostname}`);
  next();
}

router.use(fetchAndCacheHostname);

router.get('/hostname', (req, res) => {
  const message = `This app proceeded by server: ${cachedHostname}`;
  res.json({ message });
});

module.exports = router;

