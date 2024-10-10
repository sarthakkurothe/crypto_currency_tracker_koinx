const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cryptoRoutes = require('./routes/cryptoRoutes');
const fetchCryptoData = require('./jobs/cryptoJob');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// API routes
app.use('/api', cryptoRoutes);

// Start background job
fetchCryptoData();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
