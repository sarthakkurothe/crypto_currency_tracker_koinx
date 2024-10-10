const express = require('express');
const { getCryptoStats, getPriceDeviation } = require('../controllers/cryptoController');

const router = express.Router();

router.get('/stats', getCryptoStats);
router.get('/deviation', getPriceDeviation);

module.exports = router;
