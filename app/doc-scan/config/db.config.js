require('dotenv').config();

module.exports = {
  user: process.env.DB_USER_LOCAL,
  password: process.env.DB_PASSWORD_LOCAL,
  host: process.env.DB_HOST_LOCAL,
  port: process.env.DB_PORT_LOCAL,
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  database: process.env.DB_LOCAL,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
