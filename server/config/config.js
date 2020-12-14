require('dotenv').config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const config = {
  development: {
    username: username,
    password: password,
    database: database,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: username,
    password: password,
    database: database,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: username,
    password: password,
    database: database,
    host: "127.0.0.1",
    dialect: "mysql"
  }
}

module.exports = config;
