// db.js
const { Pool } = require('pg');

// Database connection configuration
const pool = new Pool({
    user: 'your_username',         // Replace with your database username
    host: 'localhost',              // Replace with your database host, or use an IP address
    database: 'dentalbookingsystem', // Database name
    password: 'your_password',      // Replace with your database password
    port: 5432                      // Default PostgreSQL port
});

pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Database connection error', err.stack));

module.exports = pool;
