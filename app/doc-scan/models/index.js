const config = require('../config/db.config.js');
const Sequelize = require('sequelize');

// Configure and connect database
const database = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: 0,
  port: config.port,
  logging: console.log,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
  retry: {
    match: [
      /SequelizeConnectionError/,
      /SequelizeConnectionRefusedError/,
      /SequelizeHostNotFoundError/,
      /SequelizeHostNotReachableError/,
      /SequelizeInvalidConnectionError/,
      /SequelizeConnectionTimedOutError/,
      /Deadlock/i,
      'SQLITE_BUSY',
    ],
    name: 'query',
    backoffBase: 100,
    backoffExponent: 1.1,
    timeout: 60000,
    max: Infinity,
  },
  dialectOptions: {
    socketPath: config.socketPath, // for MAMP only (MAC)
    connectTimeout: 60000,
    supportBigNumbers: 1,
    bigNumberStrings: 1,
  },
});

let db = {};

db.sequelize = database;
db.doc = require('./doc.model')(database, Sequelize.DataTypes);
db.user = require('./user.model')(database, Sequelize.DataTypes);

module.exports = db;
