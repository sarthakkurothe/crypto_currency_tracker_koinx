const CryptoData = require('../models/CryptoData');

const getCryptoStats = async (req, res) => {
    const { coin } = req.query;
    try {
        const latestRecord = await CryptoData.findOne({ coin }).sort({ timestamp: -1 });
        if (!latestRecord) return res.status(404).json({ message: 'No data found' });

        res.json({
            price: latestRecord.price,
            marketCap: latestRecord.marketCap,
            '24hChange': latestRecord.change24h
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getPriceDeviation = async (req, res) => {
    const { coin } = req.query;
    try {
        const records = await CryptoData.find({ coin }).sort({ timestamp: -1 }).limit(100);
        if (records.length < 2) return res.status(400).json({ message: 'Not enough data' });

        const prices = records.map(record => record.price);
        const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
        const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
        const deviation = Math.sqrt(variance);

        res.json({ deviation: deviation.toFixed(2) });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { getCryptoStats, getPriceDeviation };
