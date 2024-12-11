const express = require("express");
const {handleGenerateNewURL, handleAnalytics} = require("../controller/url");

const router = express.Router();

router.post('/', handleGenerateNewURL);

router.get('/analytics/:shortId', handleAnalytics)

module.exports = router;