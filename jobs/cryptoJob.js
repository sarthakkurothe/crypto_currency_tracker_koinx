const axios = require('axios');
const cron = require('node-cron');
const CryptoData = require('../models/CryptoData');

const coins = ['bitcoin', 'matic-network', 'ethereum'];

const fetchCryptoData = async () => {
    try {
        for (const coin of coins) {
            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
                params: {
                    vs_currency: 'usd',
                    ids: coin
                }
            });

            const data = response.data[0];
            const cryptoRecord = new CryptoData({
                coin,
                price: data.current_price,
                marketCap: data.market_cap,
                change24h: data.price_change_percentage_24h
            });

            await cryptoRecord.save();
            console.log(`${coin} data saved.`);
        }
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
};

cron.schedule('0 */2 * * *', fetchCryptoData);

module.exports = fetchCryptoData;
