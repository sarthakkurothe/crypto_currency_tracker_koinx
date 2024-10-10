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

