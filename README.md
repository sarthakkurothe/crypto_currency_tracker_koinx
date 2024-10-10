# Cryptocurrency Tracker API

This project is a server-side application built using Node.js and MongoDB. It fetches cryptocurrency data using the CoinGecko API and provides endpoints to retrieve stats and calculate standard deviation for the cryptocurrency prices. 

## Features
- **Background Job:** Fetches the current price, market cap, and 24-hour change for Bitcoin, Ethereum, and Matic every 2 hours.
- **/stats API:** Returns the latest stats for a specified cryptocurrency.
- **/deviation API:** Calculates and returns the standard deviation of the price for the last 100 records of the specified cryptocurrency.

## Technologies Used
- **Node.js**
- **MongoDB**
- **Mongoose** (MongoDB ORM)
- **CoinGecko API**
- **Express.js** (for API routes)
- **Cron Jobs** (for scheduling background tasks)

## Prerequisites
- **Node.js** installed on your machine.
- **MongoDB** (You can either use a local instance or MongoDB Atlas).

## Installation

1. Clone the repository:

```bash
  git clone https://github.com/sarthakkurothe/sleep_score_wysa.git
```

2. Navigate to the project directory:

```bash
  cd crypto-tracker-api
```

3. Install the dependencies:

```bash
  npm install
```
4. Create a `.env` file in the root of the project and add your MongoDB connection string and the CoinGecko API base URL (optional):

```bash
MONGO_URI=your-mongo-db-uri
COINGECKO_API_BASE_URL=https://api.coingecko.com/api/v3
```

5. Run the application:

```bash
npm start
```

## API Endpoints

####  1. /stats API

- Description: Fetches the latest cryptocurrency stats (price, market cap, and 24-hour change).

- Method: GET

- URL: `/api/stats`

- Query Parameters: 

  - coin: `bitcoin`, `ethereum`, or `matic-network`

- Example Request

```bash
GET http://localhost:5000/api/stats?coin=bitcoin
```

- Sample Response:

```bash
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
```

####  2. /deviation API

- Description: Returns the standard deviation of the price for the last 100 records of the specified cryptocurrency.

- Method: GET

- URL: `/api/deviation`

- Query Parameters: 

  - coin: `bitcoin`, `ethereum`, or `matic-network`

- Example Request

```bash
GET http://localhost:5000/api/deviation?coin=bitcoin
```

- Sample Response:

```bash
{
  "deviation": 4082.48
}
```



## Project Structure

```bash

├── controllers
│   ├── cryptoController.js      # Handles API logic for /stats and /deviation
├── jobs
│   ├── fetchCryptoData.js       # Contains the background job logic
├── models
│   ├── cryptoData.js            # Mongoose schema for storing crypto data
├── routes
│   ├── cryptoRoutes.js          # Defines routes for /stats and /deviation
├── .env                         # Environment variables (add your MongoDB URI here)
├── server.js                    # Entry point for the application
├── README.md                    # Project documentation
```
## Running Background Job

The background job is set up using a cron job to run every 2 hours and fetch the latest cryptocurrency data from CoinGecko. To modify the interval, you can update the cron schedule in `fetchCryptoData.js`.


