module.exports = {
  db: process.env.MONGODB || 'mongodb://localhost:27017/twitatron',

  cryptos: {
    algorithm: 'aes256',
    key: process.env.CRYPTO_KEY || 'Your crypto key goes here'
  },

  sessionSecret: process.env.SESSION_SECRET || 'Your session secret goes here',
};
