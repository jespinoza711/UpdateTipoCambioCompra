const config = {
  user: 'sa',
  password: '***!',
  server: '10.10.0.10', // You can use 'localhost\\instance' to connect to named instance
  database: 'EXACTUS',
  options: {
    encrypt: false // Use this if you're on Windows Azure
  }
}

module.exports = config
